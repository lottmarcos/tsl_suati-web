import express from "express";
import {
  deleteMember,
  getMemberData,
  getMembers,
  insertComplement,
  insertMacro,
  insertMicro,
  insertSprint,
  updateMember,
} from "../controllers/admin.js";

const router = express.Router();

router.post("/insertSprint", insertSprint);
router.post("/insertMicro", insertMicro);
router.post("/insertMacro", insertMacro);
router.post("/insertComplement", insertComplement);
router.get("/getMembers", getMembers);
router.post("/getMemberData", getMemberData);
router.post("/updateMember", updateMember);
router.post("/deleteMember", deleteMember);

export default router;
