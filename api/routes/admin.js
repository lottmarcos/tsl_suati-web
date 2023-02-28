import express from "express";
import {
  deleteMember,
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
router.post("/updateMember", updateMember);
router.post("/deleteMember", deleteMember);

export default router;
