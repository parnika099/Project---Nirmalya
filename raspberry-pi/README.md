# Raspberry Pi — Rover detection

Rover Pi on the same network: **parnika@raspberrypi** (hostname `raspberrypi` or `raspberrypi.local`).

## SSH (by IP)

From your Mac (or Cursor’s terminal):

```bash
ssh parnika@192.168.1.38
```

If the Pi’s IP changes, use the hostname: `ssh parnika@raspberrypi.local`

**Cursor:** Cursor’s agent/terminal runs in a sandbox that blocks network by default, so SSH can fail with “No route to host.” This repo has `.cursor/sandbox.json` with `networkPolicy.default: "allow"` so SSH from Cursor works. If you still can’t connect, run the command in your system Terminal or approve network when Cursor prompts.

---

Python script for the Nirmalya rover that detects:

- **Obstacles** — ultrasonic (HC-SR04) distance in cm
- **Motion** — camera-based motion area and centroid
- **Colored regions** — orange (e.g. bins/Nirmalya), green (markers) via HSV

## Setup

```bash
cd raspberry-pi
pip install -r requirements.txt
```

On Raspberry Pi, use `opencv-python-headless` and ensure `RPi.GPIO` is installed for the ultrasonic sensor.

## Ultrasonic (optional)

Wire HC-SR04:

- **TRIG** → GPIO 17  
- **ECHO** → GPIO 27  
- **VCC** → 5V  
- **GND** → GND  

If no Pi/GPIO is available, the script still runs and only camera detection is used.

## Run

```bash
python detect.py
```

Use a USB webcam or Pi Camera. Press Ctrl+C to stop.

## Output

- Distance in cm and `[OBSTACLE]` when &lt; 50 cm  
- Motion events (area and center)  
- Count and positions of orange/green regions (e.g. bins)
