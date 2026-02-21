#!/usr/bin/env python3
"""
Waste detection stream using Roboflow yolo-waste-detection/1.
Captures from camera, runs inference, draws detections, and serves
an MJPEG stream over HTTP (same pattern as camera.py).
"""

import os
import sys
import socket
import threading
import time
import warnings
from pathlib import Path
from http.server import HTTPServer, BaseHTTPRequestHandler

warnings.filterwarnings("ignore", category=FutureWarning, module="timm.")

# Load .env from script directory (ROBOFLOW_API_KEY)
_env_file = Path(__file__).resolve().parent / ".env"
if _env_file.exists():
    for line in _env_file.read_text().strip().splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            key, _, value = line.partition("=")
            key, value = key.strip(), value.strip().strip('"').strip("'")
            os.environ.setdefault(key, value)

# Suppress inference optional-model warnings (we only use object detection)
for _var in (
    "CORE_MODEL_SAM_ENABLED",
    "CORE_MODEL_SAM3_ENABLED",
    "CORE_MODEL_GAZE_ENABLED",
    "CORE_MODEL_YOLO_WORLD_ENABLED",
):
    os.environ.setdefault(_var, "False")

import cv2
from inference import get_model
from inference.core.exceptions import RoboflowAPINotAuthorizedError
import supervision as sv


# Shared state: latest JPEG frame (annotated with detections)
latest_jpeg = None
latest_lock = threading.Lock()

STREAM_PORT = 8766
CAMERA_INDEX = 0

STREAM_WIDTH = 1280
STREAM_HEIGHT = 720
JPEG_QUALITY = 92

# Model and inference
MODEL_ID = "yolo-waste-detection/1"
CONFIDENCE = 0.4
IOU_THRESHOLD = 0.5


def capture_and_infer_loop(model):
    """Capture frames, run waste detection, annotate, and encode to JPEG."""
    global latest_jpeg

    bounding_box_annotator = sv.BoxAnnotator()
    label_annotator = sv.LabelAnnotator()

    cap = cv2.VideoCapture(CAMERA_INDEX)
    if not cap.isOpened():
        print("Error: Could not open camera.", file=sys.stderr)
        sys.exit(1)

    cap.set(cv2.CAP_PROP_FRAME_WIDTH, STREAM_WIDTH)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, STREAM_HEIGHT)
    w = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    h = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    print("Camera opened. Resolution:", w, "x", h)

    while True:
        ret, frame = cap.read()
        if not ret:
            continue

        # Run inference (frame is BGR numpy array)
        try:
            results = model.infer(
                frame,
                confidence=CONFIDENCE,
                iou_threshold=IOU_THRESHOLD,
            )
            # infer() may return a list (batch) or a single response
            resp = results[0] if isinstance(results, (list, tuple)) and results else results
            if resp is not None:
                detections = sv.Detections.from_inference(resp)
                preds = getattr(resp, "predictions", []) or []
                labels = [
                    f"{getattr(p, 'class_name', '')} {getattr(p, 'confidence', 0):.2f}"
                    for p in preds
                ]
                if len(detections) > 0:
                    frame = bounding_box_annotator.annotate(scene=frame, detections=detections)
                    frame = label_annotator.annotate(
                        scene=frame, detections=detections, labels=labels
                    )
        except Exception:
            # On error, stream the raw frame
            pass

        _, jpeg = cv2.imencode(
            ".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, JPEG_QUALITY]
        )
        with latest_lock:
            latest_jpeg = jpeg.tobytes()

    cap.release()


class StreamHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/" or self.path == "/stream":
            self.send_response(200)
            self.send_header(
                "Content-type", "multipart/x-mixed-replace; boundary=frame"
            )
            self.end_headers()
            try:
                while True:
                    with latest_lock:
                        data = latest_jpeg
                    if data:
                        self.wfile.write(b"--frame\r\n")
                        self.send_header("Content-type", "image/jpeg")
                        self.send_header("Content-length", len(data))
                        self.end_headers()
                        self.wfile.write(data)
                        self.wfile.write(b"\r\n")
                    time.sleep(0.05)
            except (BrokenPipeError, ConnectionResetError):
                pass
            return
        self.send_error(404)

    def log_message(self, format, *args):
        pass


class ReuseAddrHTTPServer(HTTPServer):
    """Allow reusing the port after the process exits (avoids 'Address already in use')."""
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        super().server_bind()


def main():
    api_key = (os.environ.get("ROBOFLOW_API_KEY") or "").strip()
    if not api_key:
        print("Error: ROBOFLOW_API_KEY is not set. Add it to raspberry-pi/.env or export it.", file=sys.stderr)
        sys.exit(1)

    print("Loading model", MODEL_ID, "...")
    try:
        model = get_model(model_id=MODEL_ID, api_key=api_key)
    except RoboflowAPINotAuthorizedError as e:
        print("Error: Roboflow API key was rejected (401 Unauthorized).", file=sys.stderr)
        print("Check that your key is correct and has access to this model:", file=sys.stderr)
        print("  https://docs.roboflow.com/api-reference/authentication#retrieve-an-api-key", file=sys.stderr)
        print("If using a Universe model, ensure you're logged in and the key is from the same workspace.", file=sys.stderr)
        sys.exit(1)

    print("Starting waste detection stream...")
    print(
        f"Open in a browser: http://raspberrypi.local:{STREAM_PORT}  or  http://<pi-ip>:{STREAM_PORT}"
    )
    print("Press Ctrl+C to stop.")

    t = threading.Thread(target=capture_and_infer_loop, args=(model,), daemon=True)
    t.start()

    time.sleep(2)  # Let first frame be captured
    try:
        server = ReuseAddrHTTPServer(("0.0.0.0", STREAM_PORT), StreamHandler)
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"Error: Port {STREAM_PORT} is already in use.", file=sys.stderr)
            print("Stop the other process:  pkill -f waste_detection_stream", file=sys.stderr)
            print("Or set STREAM_PORT to another number at the top of this script.", file=sys.stderr)
        else:
            print("Error:", e, file=sys.stderr)
        sys.exit(1)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    server.shutdown()


if __name__ == "__main__":
    main()
