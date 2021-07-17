import { Router } from "express";
import api from "../services/api.js";

const router = new Router();

// localhost:5000/api/
router.get("/", (_, res) => {
  res.send("Hello api");
});

// localhost:5000/api/
router.get("/tables", async (_, res) => {
  // `api.index` returns a Promise
  // The data is wrapped in that Promise
  const tables = await api.index();
  res.status(200).json(tables);
});

// localhost:5000/api/
router.get("/waitlist", async (_, res) => {
  const waitlist = await api.index("reservations");
  res.status(200).json(waitlist);
});

export default router;
