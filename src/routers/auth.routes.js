import { Router } from "express";
import {login, register, logout, profile} from "../controllers/auth.controllers.js";
import AuthVerific from "../middleware/ValidateToke.js";

const router = Router();

router.post('/login',login);
router.post('/register', register);
router.get('/logout', logout);
router.get('/profile', AuthVerific, profile);

export default router;