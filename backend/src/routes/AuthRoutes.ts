import { Router } from "express";
import * as authController from "../controllers/AuthController";
import { authSchema } from "../schemas/authSchema";
import { validateBody } from "../middlewares/validate";
import { authenticate } from "../middlewares/auth";

const router = Router();

router.post("/register", validateBody(authSchema), authController.register);
router.post("/login", validateBody(authSchema), authController.login);
router.get("/", authenticate, authController.getProfile);

export default router;
