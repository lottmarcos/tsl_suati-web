import express from "express";
import {
  getData,
  getFills,
  getTasks,
  insertTask,
  updateTask,
} from "../controllers/system.js";

const router = express.Router();

router.post("/getData", getData);
router.post("/getTasks", getTasks);
router.post("/getFills", getFills);
router.post("/insertTask", insertTask);
router.post("/updateTask", updateTask);

export default router;
