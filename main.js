// 1. DATA: Replace with your real temple + route coordinates

const temples = [
  { name: "Ramkund (Godavari Ghat)", lat: 19.9975, lng: 73.7898 },
  { name: "Kalaram Temple", lat: 20.0040, lng: 73.7922 },
  { name: "Sita Gufa", lat: 20.0033, lng: 73.7928 },
  { name: "Kapaleshwar Temple", lat: 19.9979, lng: 73.7890 },
  { name: "Trimbakeshwar Temple", lat: 19.9373, lng: 73.5292 },
];

const roverPathCoords = [
  [19.9373, 73.5292], // Trimbakeshwar
  [19.97, 73.65],
  [19.985, 73.73],
  [19.9975, 73.7898], // Ramkund
  [20.004, 73.7922], // Kalaram
  [20.0033, 73.7928], // Sita Gufa
  [19.9979, 73.789],
  [19.99, 73.78],
  [19.98, 73.76],
  [19.9373, 73.5292], // back to Trimbakeshwar
];

// 2. Utility helpers

function formatKm(meters) {
  return (meters / 1000).toFixed(2);
}

function formatLatLng(lat, lng) {
  return `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

function formatEta(seconds) {
  if (!isFinite(seconds) || seconds <= 0) return "–";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs}s`;
}

function computeRouteSegments(coords) {
  const segments = [];
  let total = 0;
  for (let i = 0; i < coords.length - 1; i++) {
    const from = L.latLng(coords[i]);
    const to = L.latLng(coords[i + 1]);
    const dist = from.distanceTo(to);
    segments.push({ from, to, distance: dist, start: total, end: total + dist });
    total += dist;
  }
  return { segments, total };
}

function pointAlongRoute(segments, totalLength, distance) {
  if (!segments.length) return null;
  if (distance <= 0) return segments[0].from;
  if (distance >= totalLength) return segments[segments.length - 1].to;

  for (const seg of segments) {
    if (distance >= seg.start && distance <= seg.end) {
      const ratio = (distance - seg.start) / seg.distance;
      const lat = seg.from.lat + (seg.to.lat - seg.from.lat) * ratio;
      const lng = seg.from.lng + (seg.to.lng - seg.from.lng) * ratio;
      return L.latLng(lat, lng);
    }
  }
  return segments[segments.length - 1].to;
}

function computeBearingDeg(from, to) {
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;
  const dLon = ((to.lng - from.lng) * Math.PI) / 180;

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  const brng = (Math.atan2(y, x) * 180) / Math.PI;
  return (brng + 360) % 360;
}

// 3. Leaflet map setup

const map = L.map("map", {
  center: [19.9975, 73.7898],
  zoom: 12,
  minZoom: 3,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const templeLayer = L.layerGroup().addTo(map);
const routeLayer = L.layerGroup().addTo(map);
const roverLayer = L.layerGroup().addTo(map);
const trailLayer = L.layerGroup().addTo(map);

// 4. Temple markers

const templeMarkers = [];

function createTempleMarkers() {
  templeLayer.clearLayers();
  templeMarkers.length = 0;

  temples.forEach((t) => {
    const marker = L.circleMarker([t.lat, t.lng], {
      radius: 7,
      color: "#f97316",
      weight: 2,
      fillColor: "#fed7aa",
      fillOpacity: 0.9,
    }).addTo(templeLayer);

    marker.bindTooltip("", {
      direction: "top",
      opacity: 0.95,
      sticky: true,
    });

    templeMarkers.push({ temple: t, marker });
  });
}

createTempleMarkers();

// 5. Rover route & trail

const routePolyline = L.polyline(roverPathCoords, {
  color: "#2563eb",
  weight: 4,
  opacity: 0.8,
}).addTo(routeLayer);

const trailPolyline = L.polyline([], {
  color: "#93c5fd",
  weight: 4,
  opacity: 0.9,
}).addTo(trailLayer);

const allCoords = [
  ...roverPathCoords.map(([lat, lng]) => [lat, lng]),
  ...temples.map((t) => [t.lat, t.lng]),
];
if (allCoords.length) {
  map.fitBounds(allCoords, { padding: [20, 20] });
}

const { segments: routeSegments, total: routeLengthMeters } =
  computeRouteSegments(roverPathCoords);

// 6. Rover & animation

const speedKmh = 18;
const speedMps = (speedKmh * 1000) / 3600;
const updateIntervalMs = 150;

let roverDistanceMeters = 0;
let roverTotalDistanceMeters = 0;
let roverTimer = null;
let roverLatLng = null;
let lastUpdateTime = null;

const roverIcon = L.divIcon({
  className: "rover-icon",
  html: '<div class="rover-icon-inner"></div>',
  iconSize: [26, 26],
  iconAnchor: [13, 13],
});

let roverMarker = null;

function initRover() {
  roverDistanceMeters = 0;
  roverTotalDistanceMeters = 0;
  lastUpdateTime = null;

  const startPoint = pointAlongRoute(
    routeSegments,
    routeLengthMeters,
    roverDistanceMeters
  );
  roverLatLng = startPoint;

  if (!roverMarker) {
    roverMarker = L.marker(startPoint, { icon: roverIcon }).addTo(roverLayer);
    roverMarker.bindPopup("<strong>Rover</strong><br>Autonomous collection unit");
  } else {
    roverMarker.setLatLng(startPoint);
  }

  updateRoverTelemetryUI();
  updateTempleDistances();
  updateTrail(true);
  setRoverRotation(0);
}

function setRoverRotation(bearingDeg) {
  if (!roverMarker) return;
  const el = roverMarker.getElement();
  if (!el) return;
  const inner = el.querySelector(".rover-icon-inner");
  if (!inner) return;
  inner.style.transform = `rotate(${bearingDeg}deg)`;
}

function updateTrail(reset = false) {
  if (reset) {
    trailPolyline.setLatLngs(roverLatLng ? [roverLatLng] : []);
    return;
  }

  const existing = trailPolyline.getLatLngs();
  if (!roverLatLng) return;
  if (!existing.length || existing[existing.length - 1].distanceTo(roverLatLng) > 5) {
    existing.push(roverLatLng);
    trailPolyline.setLatLngs(existing);
  }
}

function stepRover() {
  const now = performance.now();
  if (!lastUpdateTime) {
    lastUpdateTime = now;
    return;
  }
  const dtSec = (now - lastUpdateTime) / 1000;
  lastUpdateTime = now;

  const stepDist = speedMps * dtSec;
  roverDistanceMeters += stepDist;
  roverTotalDistanceMeters += stepDist;

  if (roverDistanceMeters > routeLengthMeters) {
    roverDistanceMeters -= routeLengthMeters;
  }

  const prevLatLng = roverLatLng;
  roverLatLng = pointAlongRoute(routeSegments, routeLengthMeters, roverDistanceMeters);

  if (roverMarker && roverLatLng) {
    roverMarker.setLatLng(roverLatLng);
    if (prevLatLng) {
      const bearing = computeBearingDeg(prevLatLng, roverLatLng);
      setRoverRotation(bearing);
    }
  }

  updateTrail();
  updateRoverTelemetryUI();
  updateTempleDistances();
}

function startRover() {
  if (roverTimer) return;
  lastUpdateTime = null;
  roverTimer = setInterval(stepRover, updateIntervalMs);
  setSystemStatus("Online · Moving", "online");
  document.getElementById("rover-status-text").textContent = "Moving";
}

function pauseRover() {
  if (roverTimer) {
    clearInterval(roverTimer);
    roverTimer = null;
  }
  setSystemStatus("Online · Paused", "paused");
  document.getElementById("rover-status-text").textContent = "Paused";
}

function resetRover() {
  pauseRover();
  initRover();
  setSystemStatus("Online · Idle", "online");
  document.getElementById("rover-status-text").textContent = "Idle";
}

// 7. UI updates

function setSystemStatus(label, mode) {
  const pill = document.getElementById("system-status-pill");
  const dot = pill.querySelector(".status-dot");
  const text = document.getElementById("system-status-text");

  text.textContent = label;
  dot.classList.remove("online", "paused", "offline");
  if (mode === "online") dot.classList.add("online");
  else if (mode === "paused") dot.classList.add("paused");
  else dot.classList.add("offline");
}

function updateRoverTelemetryUI() {
  const speedEl = document.getElementById("rover-speed-text");
  const distanceEl = document.getElementById("rover-distance-text");
  const coordsEl = document.getElementById("rover-coords-text");
  const progressEl = document.getElementById("rover-progress-text");
  const etaEl = document.getElementById("rover-eta-text");

  const progress =
    routeLengthMeters > 0 ? (roverDistanceMeters / routeLengthMeters) * 100 : 0;
  const remainingMeters = Math.max(routeLengthMeters - roverDistanceMeters, 0);
  const etaSeconds = remainingMeters / speedMps;

  speedEl.textContent = `${speedKmh.toFixed(0)} km/h`;
  distanceEl.textContent = `${formatKm(roverTotalDistanceMeters)} km`;
  progressEl.textContent = `${progress.toFixed(1)}%`;
  etaEl.textContent = formatEta(etaSeconds);

  if (roverLatLng) {
    coordsEl.textContent = formatLatLng(roverLatLng.lat, roverLatLng.lng);
  } else {
    coordsEl.textContent = "–, –";
  }
}

function updateTempleDistances() {
  if (!roverLatLng) {
    templeMarkers.forEach(({ temple, marker }) => {
      const html = `
        <strong>${temple.name}</strong><br/>
        Lat: ${temple.lat.toFixed(5)}<br/>
        Lng: ${temple.lng.toFixed(5)}<br/>
        Distance from rover: –
      `;
      marker.setTooltipContent(html);
    });
    return;
  }

  templeMarkers.forEach(({ temple, marker }) => {
    const dist = roverLatLng.distanceTo([temple.lat, temple.lng]);
    const distKm = (dist / 1000).toFixed(2);
    const html = `
      <strong>${temple.name}</strong><br/>
      Lat: ${temple.lat.toFixed(5)}<br/>
      Lng: ${temple.lng.toFixed(5)}<br/>
      Distance from rover: ${distKm} km
    `;
    marker.setTooltipContent(html);
  });

  const listEl = document.getElementById("temple-list");
  if (!listEl) return;
  Array.from(listEl.children).forEach((row, idx) => {
    const t = temples[idx];
    if (!t) return;
    const dist = roverLatLng.distanceTo([t.lat, t.lng]);
    const distKm = (dist / 1000).toFixed(2);
    const metaEl = row.querySelector(".temple-meta");
    if (metaEl) metaEl.textContent = `${distKm} km from rover`;
  });
}

function buildTempleList() {
  const listEl = document.getElementById("temple-list");
  listEl.innerHTML = "";

  temples.forEach((t, idx) => {
    const row = document.createElement("div");
    row.className = "temple-row";

    const main = document.createElement("div");
    main.className = "temple-main";

    const nameEl = document.createElement("div");
    nameEl.className = "temple-name";
    nameEl.textContent = `${idx + 1}. ${t.name}`;

    const coordsEl = document.createElement("div");
    coordsEl.className = "temple-coords";
    coordsEl.textContent = formatLatLng(t.lat, t.lng);

    main.appendChild(nameEl);
    main.appendChild(coordsEl);

    const meta = document.createElement("div");
    meta.className = "temple-meta";
    meta.textContent = "–";

    row.appendChild(main);
    row.appendChild(meta);

    listEl.appendChild(row);
  });
}

// 8. Controls

document.getElementById("btn-start").addEventListener("click", startRover);
document.getElementById("btn-pause").addEventListener("click", pauseRover);
document.getElementById("btn-reset").addEventListener("click", resetRover);

buildTempleList();
initRover();
