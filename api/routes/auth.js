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
router.post("/getSystems", getSystems);
router.post("/getSubsystems", getSubsystems);
router.post("/getRoles", getRoles);

export default router;
