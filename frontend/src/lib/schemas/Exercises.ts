import { z } from "zod";

export const exercisesTypes = [
    "RUN",
    "BIKE",
    "GYM",
    "SWIM",
    "YOGA",
    "WALK",
    "",
] as const;

export const exercisesIntensity = ["LOW", "MEDIUM", "HIGH", ""] as const;

export const exercisesSchema = z.object({
    exercises: z.array(
        z.object({
            key: z.string(),
            type: z.enum(exercisesTypes),
            duration: z.number().min(1, "Duration must be at least 1 minute"),
            intensity: z.enum(exercisesIntensity),
        })
    ),
    note: z.string().max(500).optional(),
});
