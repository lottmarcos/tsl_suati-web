import express from "express";
import {
  deleteFill,
  getData,
  getDebt,
  getFills,
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
router.post("/insertFill", insertFill);
router.post("/deleteFill", deleteFill);
router.post("/insertSprint", insertSprint);
router.post("/updateSprint", updateSprint);

export default router;
