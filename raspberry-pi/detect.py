#!/usr/bin/env python3
"""
Raspberry Pi detection script for Nirmalya rover.
Detects: obstacles (ultrasonic), motion/objects (camera), and colored regions (e.g. bins).
"""

import sys
import time

try:
    import cv2
    import numpy as np
except ImportError:
    print("Install: pip install opencv-python-headless numpy")
    sys.exit(1)

# Optional: GPIO for ultrasonic sensor (only on Raspberry Pi)
USE_ULTRASONIC = False
try:
    import RPi.GPIO as GPIO
    USE_ULTRASONIC = True
except (ImportError, RuntimeError):
    pass


# ─── Ultrasonic (HC-SR04) ─────────────────────────────────────

TRIG_PIN = 17
ECHO_PIN = 27

def setup_ultrasonic():
    if not USE_ULTRASONIC:
        return
    GPIO.setmode(GPIO.BCM)
    GPIO.setwarnings(False)
    GPIO.setup(TRIG_PIN, GPIO.OUT)
    GPIO.setup(ECHO_PIN, GPIO.IN)


def distance_cm():
    """Return distance in cm from ultrasonic sensor, or None if not available."""
    if not USE_ULTRASONIC:
        return None
    GPIO.output(TRIG_PIN, False)
    time.sleep(0.02)
    GPIO.output(TRIG_PIN, True)
    time.sleep(0.00001)
    GPIO.output(TRIG_PIN, False)
    start = time.time()
    while GPIO.input(ECHO_PIN) == 0:
        start = time.time()
        if time.time() - start > 0.1:
            return None
    while GPIO.input(ECHO_PIN) == 1:
        stop = time.time()
        if stop - start > 0.1:
            return None
    return (stop - start) * 17150  # cm


# ─── Camera detection ──────────────────────────────────────────

def detect_colored_regions(frame, lower_hsv, upper_hsv, min_area=500):
    """Detect blobs of a given color (HSV range). Returns list of (cx, cy, area)."""
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(hsv, lower_hsv, upper_hsv)
    mask = cv2.erode(mask, None, iterations=2)
    mask = cv2.dilate(mask, None, iterations=2)
    contours, _ = cv2.findContours(
        mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
    )
    detections = []
    for c in contours:
        area = cv2.contourArea(c)
        if area < min_area:
            continue
        M = cv2.moments(c)
        if M["m00"]:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
            detections.append((cx, cy, area))
    return detections


def detect_motion(prev_gray, frame, thresh=25):
    """Simple motion detection. Returns motion magnitude and centroid (cx, cy) or None."""
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    gray = cv2.GaussianBlur(gray, (21, 21), 0)
    if prev_gray is None:
        return 0, None
    diff = cv2.absdiff(prev_gray, gray)
    _, diff = cv2.threshold(diff, thresh, 255, cv2.THRESH_BINARY)
    diff = cv2.dilate(diff, None, iterations=2)
    contours, _ = cv2.findContours(
        diff, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
    )
    total_area = 0
    cx_sum, cy_sum, n = 0, 0, 0
    for c in contours:
        if cv2.contourArea(c) < 500:
            continue
        total_area += cv2.contourArea(c)
        M = cv2.moments(c)
        if M["m00"]:
            cx_sum += int(M["m10"] / M["m00"])
            cy_sum += int(M["m01"] / M["m00"])
            n += 1
    centroid = (cx_sum // n, cy_sum // n) if n else None
    return total_area, centroid


# ─── Main loop ─────────────────────────────────────────────────

# Orange range (e.g. temple bins / Nirmalya) in HSV
LOWER_ORANGE = np.array([10, 100, 100])
UPPER_ORANGE = np.array([25, 255, 255])

# Green range (e.g. go / safe zone)
LOWER_GREEN = np.array([35, 100, 100])
UPPER_GREEN = np.array([85, 255, 255])


def main():
    if USE_ULTRASONIC:
        setup_ultrasonic()
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        print("No camera found. Use a USB camera or Pi Camera.")
        sys.exit(1)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
    prev_gray = None
    print("Rover detection running. Ctrl+C to stop.")
    print("Detecting: obstacles (ultrasonic), motion, orange/green regions (camera)\n")
    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            # Ultrasonic
            dist = distance_cm()
            obstacle = dist is not None and 0 < dist < 50
            if dist is not None:
                print(f"Distance: {dist:.1f} cm  {'[OBSTACLE]' if obstacle else ''}")
            # Motion
            motion_area, motion_center = detect_motion(prev_gray, frame)
            prev_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            prev_gray = cv2.GaussianBlur(prev_gray, (21, 21), 0)
            if motion_area > 5000:
                print(f"Motion: area={motion_area} center={motion_center}")
            # Color (orange = bins / Nirmalya, green = markers)
            orange = detect_colored_regions(frame, LOWER_ORANGE, UPPER_ORANGE)
            green = detect_colored_regions(frame, LOWER_GREEN, UPPER_GREEN)
            if orange:
                print(f"Orange regions (e.g. bins): {len(orange)} {orange[:3]}")
            if green:
                print(f"Green regions: {len(green)} {green[:3]}")
            time.sleep(0.2)
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        cap.release()
        if USE_ULTRASONIC:
            GPIO.cleanup()


if __name__ == "__main__":
    main()
