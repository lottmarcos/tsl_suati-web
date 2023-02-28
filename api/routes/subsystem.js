import express from "express";
import {
  getFills,
  getMembersHours,
  getSprints,
  getSubsystemData,
  getTasks,
  insertSprint,
  insertTask,
  updateSprint,
  updateTask,
} from "../controllers/subsystem.js";

const router = express.Router();

router.post("/getSubsystemData", getSubsystemData);
router.post("/getMembersHours", getMembersHours);
router.post("/getSprints", getSprints);
router.post("/getTasks", getTasks);
router.post("/getFills", getFills);
router.post("/insertSprint", insertSprint);
router.post("/updateSprint", updateSprint);
router.post("/insertTask", insertTask);
router.post("/updateTask", updateTask);

export default router;
