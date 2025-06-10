import { Router } from "express";
import * as authController from "../controllers/AuthController";
import { loginSchema, registerSchema } from "../schemas/authSchema";
import { validateBody } from "../middlewares/validate";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.post("/register", validateBody(registerSchema), authController.register);
router.post("/login", validateBody(loginSchema), authController.login);
router.get("/", authenticate, authController.getProfile);

export default router;
