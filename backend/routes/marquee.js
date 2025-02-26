import express from "express";
import { getMarquee, updateMarquee } from "../controllers/marqueeController.js";

const router = express.Router();
router.get("/get", getMarquee);
router.post("/update", updateMarquee);

export default router;
