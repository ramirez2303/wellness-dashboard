import { Router } from "express";
import * as physicalControler from "../controllers/PhysicalController";
import { validateBody, validateQuery } from "../middlewares/validate";
import {
    exercisesGetSchema,
    exercisesSchema,
} from "../schemas/exercisesSchema";

const router = Router();

router.post(
    "/exercise",
    validateBody(exercisesSchema),
    physicalControler.createPhysicalRecord
);
router.get(
    "/exercise",
    validateQuery(exercisesGetSchema),
    physicalControler.getPhysicalRecord
);

export default router;
