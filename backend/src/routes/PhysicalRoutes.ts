import { Router } from "express";
import * as physicalControler from "../controllers/PhysicalController";
import { validateBody, validateQuery } from "../middlewares/validate";
import {
    exercisesGetSchema,
    exercisesSchema,
} from "../schemas/exercisesSchema";
import { habitsGetSchema, habitsSchema } from "../schemas/habitsSchema";

const router = Router();

router.post(
    "/exercise",
    validateBody(exercisesSchema),
    physicalControler.createPhysicalExerciseRecord
);
router.get(
    "/exercise",
    validateQuery(exercisesGetSchema),
    physicalControler.getPhysicalExeciseRecord
);
router.post(
    "/habits",
    validateBody(habitsSchema),
    physicalControler.createPhysicalHabitsRecord
);
router.get(
    "/habits",
    validateQuery(habitsGetSchema),
    physicalControler.getPhysicalHabitsRecord
);

export default router;
