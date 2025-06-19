import { z } from "zod";

const energyOptions = ["LOW", "MEDIUM", "HIGH"] as const;

export const habitsSchema = z.object({
    userId: z.string().uuid("Invalid user ID format"),
    date: z.string().datetime("Invalid date format").optional(),
    sleepHours: z.number().min(0, "Sleep hours must be a positive number"),
    waterLiters: z.number().min(0, "Water intake must be a positive number"),
    energyLevel: z
        .enum(energyOptions)
        .refine((value) => energyOptions.includes(value), {
            message: "Invalid energy level",
        }),
    note: z.string().max(500).optional(),
});

export const habitsGetSchema = z.object({
    userId: z.string().uuid("Invalid user ID format"),
    from: z.string().datetime("Invalid date format").optional(),
    to: z.string().datetime("Invalid date format").optional(),
});
