import express from "express";
import {
  deleteFill,
  getComplements,
  getData,
  getDebt,
  getFills,
  getMacros,
  getMicros,
  getSprints,
  insertFill,
  insertSprint,
  updateSprint,
} from "../controllers/member.js";

const router = express.Router();

router.post("/getData", getData);
router.post("/getSprints", getSprints);
router.post("/getDebt", getDebt);
router.post("/getFills", getFills);
router.get("/getMacros", getMacros);
router.get("/getMicros", getMicros);
router.get("/getComplements", getComplements);
router.post("/insertFill", insertFill);
router.post("/deleteFill", deleteFill);
router.post("/insertSprint", insertSprint);
router.post("/updateSprint", updateSprint);

export default router;
