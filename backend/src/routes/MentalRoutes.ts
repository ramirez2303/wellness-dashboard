import { Router } from "express";
import * as mentalController from "../controllers/MentalController";
import { validateBody, validateQuery } from "../middlewares/validate";
import { getMentalSchema, mentalSchema } from "../schemas/mentalSchema";

const router = Router();

router.post(
    "/",
    validateBody(mentalSchema),
    mentalController.createMentalRecord
);
router.get(
    "/",
    validateQuery(getMentalSchema),
    mentalController.getMentalRecords
);

export default router;
