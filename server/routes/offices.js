import { Router } from "express";
import offices from "../data/gov-offices.js";

const router = Router();

// Helper: check if office is open
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

// Get all offices with open status
router.get("/", (req, res) => {
  const updated = offices.map(o => ({ ...o, available: isOfficeOpen(o.hours) }));
  res.json(updated);
});

// Nearby offices
router.get("/nearby", (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ error: "Missing coordinates" });

  const updated = offices.map(o => ({ ...o, available: isOfficeOpen(o.hours) }));
  const nearby = updated.filter(o =>
    Math.abs(o.lat - parseFloat(lat)) < 0.5 &&
    Math.abs(o.lon - parseFloat(lon)) < 0.5
  );

  res.json(nearby);
});

export default router;
