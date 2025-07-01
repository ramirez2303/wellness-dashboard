import { z } from "zod";

export const habitsEnergy = ["LOW", "MEDIUM", "HIGH"] as const;

export const habitsSchema = z.object({
    sleepHours: z
        .number()
        .min(0, "Sleep hours cannot be negative")
        .max(24, "Sleep hours cannot exceed 24"),
    waterLiters: z.number().min(0, "Water intake cannot be negative"),
    energyLevel: z.enum(habitsEnergy),
    note: z.string().max(500).optional(),
});
