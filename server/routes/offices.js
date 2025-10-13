import { Router } from "express";
import officesByRegion from "../data/office-database.js";

const router = Router();

// Check if office is open
function isOfficeOpen(hours) {
  if (!hours) return false;
  const now = new Date();
  const tzNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));

  const [openH, openM] = hours.open.split(":").map(Number);
  const [closeH, closeM] = hours.close.split(":").map(Number);

  const openTime = new Date(tzNow);
  openTime.setHours(openH, openM, 0);
  const closeTime = new Date(tzNow);
  closeTime.setHours(closeH, closeM, 0);

  return tzNow >= openTime && tzNow <= closeTime;
}

// Flatten offices with region info
function getAllOffices() {
  return Object.values(officesByRegion).flat().map(o => ({ ...o }));
}

// Haversine distance
function getDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(lat1 * Math.PI / 180) *
            Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Get all offices with open status
router.get("/", (req, res) => {
  const updated = getAllOffices().map(o => ({
    ...o,
    available: isOfficeOpen(o.hours)
  }));
  res.json(updated);
});

// Nearby offices
router.get("/nearby", (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ error: "Missing coordinates" });

  const updated = getAllOffices().map(o => ({
    ...o,
    available: isOfficeOpen(o.hours)
  }));

  const nearby = updated.filter(o =>
    getDistanceKm(o.lat, o.lon, parseFloat(lat), parseFloat(lon)) <= 25
  );

  res.json(nearby);
});

export default router;