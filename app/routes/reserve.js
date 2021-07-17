import { Router } from "express";
import api from "../services/api.js";

const router = new Router();

// '/reserve/'
router.get("/", (_, res) => {
  res.send("Reserve Page");
});

router.post("/", (req, res) => {
  api.add(req.body);
  res.send("Reserve Post");
});

// Importer can give any name
// Typically, we only export default one thing
// We don't want to include named exports
export default router;
