import express from "express";
import { getMe } from "root/controllers/api";

const router = express.Router();

router.get("/me", getMe);
export default router;
