import express from "express";
import { getMembers, getTeamData } from "../controllers/team.js";

const router = express.Router();

router.post("/getTeamData", getTeamData);
router.post("/getMembers", getMembers);

export default router;
