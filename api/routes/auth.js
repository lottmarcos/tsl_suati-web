import express from "express";
import {
  getRoles,
  getSubsystems,
  getSystems,
  login,
  register,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/getSystems", getSystems);
router.post("/getSubsystems", getSubsystems);
router.get("/getRoles", getRoles);

export default router;
