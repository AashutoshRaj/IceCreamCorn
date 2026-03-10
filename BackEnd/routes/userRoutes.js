import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// ===== User Schema and Model =====    

router.post("/sign_up", registerUser);
router.post("/login", loginUser);

export default router;