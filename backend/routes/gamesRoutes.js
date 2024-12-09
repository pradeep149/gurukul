import express from "express";
import { generateSuduku } from "../controllers/gamesController"; 

const router = express.Router();



// Public route to fetch blogs
router.post("/generateSuduku", generateSuduku);


export default router;
