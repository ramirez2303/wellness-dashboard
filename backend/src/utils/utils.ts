import { randomUUID } from "crypto";
import { Exercise } from "../types";

export const generateId = (): string => {
    return randomUUID();
};

export const CALORIE_MAP = {
    RUN: { LOW: 7, MEDIUM: 10, HIGH: 14 },
    BIKE: { LOW: 5, MEDIUM: 8, HIGH: 12 },
    GYM: { LOW: 4, MEDIUM: 7, HIGH: 10 },
    SWIM: { LOW: 6, MEDIUM: 9, HIGH: 13 },
    YOGA: { LOW: 2, MEDIUM: 4, HIGH: 6 },
    WALK: { LOW: 3, MEDIUM: 5, HIGH: 7 },
};

export const calculateCaloriesBurned = (exercises: Exercise[]) => {
    let totalCalories = 0;
    for (const ex of exercises) {
        const rate = CALORIE_MAP[ex.type][ex.intensity];
        totalCalories += (rate * ex.duration) / 30;
    }
    return totalCalories;
};
