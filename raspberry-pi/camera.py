#!/usr/bin/env python3
"""
Headless OpenCV camera for Raspberry Pi (no GUI).
Serves a live MJPEG stream over HTTP. Open in a browser to view.
Uses opencv-python-headless (no GTK/Cocoa required).
"""

import cv2
import sys
import threading
import time
from http.server import HTTPServer, BaseHTTPRequestHandler


# Shared state: latest JPEG frame
latest_jpeg = None
latest_lock = threading.Lock()

STREAM_PORT = 8765
CAMERA_INDEX = 0

# Request higher resolution (camera may round to nearest supported)
STREAM_WIDTH = 1280   # 720p; try 1920 for 1080p if the Pi keeps up
STREAM_HEIGHT = 720
JPEG_QUALITY = 92     # 1–100; higher = less compression blur


def capture_loop():
    """Capture frames and encode to JPEG in the background."""
    global latest_jpeg

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
        _, jpeg = cv2.imencode(".jpg", frame, [cv2.IMWRITE_JPEG_QUALITY, JPEG_QUALITY])
        with latest_lock:
            latest_jpeg = jpeg.tobytes()

    cap.release()


class StreamHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/" or self.path == "/stream":
            self.send_response(200)
            self.send_header("Content-type", "multipart/x-mixed-replace; boundary=frame")
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
        pass  # Suppress request logs


def main():
    print("Starting camera stream...")
    print(f"Open in a browser: http://raspberrypi.local:{STREAM_PORT}  or  http://<pi-ip>:{STREAM_PORT}")
    print("Press Ctrl+C to stop.")

    t = threading.Thread(target=capture_loop, daemon=True)
    t.start()

    time.sleep(1)  # Let first frame be captured
    server = HTTPServer(("0.0.0.0", STREAM_PORT), StreamHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    server.shutdown()


if __name__ == "__main__":
    main()
