import express from "express";
import {
  deleteDebt,
  getDebts,
  getMembersDebt,
  insertDebt,
  updateDebt,
} from "../controllers/finance.js";

const router = express.Router();

router.post("/insertDebt", insertDebt);
router.post("/getDebts", getDebts);
router.post("/updateDebt", updateDebt);
router.post("/deleteDebt", deleteDebt);
router.post("/getMembersDebt", getMembersDebt);

export default router;
