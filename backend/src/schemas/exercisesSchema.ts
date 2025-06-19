import { z } from "zod";

const instensityOptions = ["LOW", "MEDIUM", "HIGH"] as const;

const typesOptions = ["RUN", "BIKE", "GYM", "SWIM", "YOGA", "WALK"] as const;

export const exercisesSchema = z.object({
    userId: z.string().uuid("Invalid user ID format"),
    date: z.string().datetime("Invalid date format").optional(),
    exercises: z.array(
        z.object({
            duration: z.number().min(1, "Duration must be at least 1 minute"),
            type: z
                .enum(typesOptions)
                .refine((value) => typesOptions.includes(value), {
                    message: "Invalid exercise type",
                }),
            intensity: z
                .enum(instensityOptions)
                .refine((value) => instensityOptions.includes(value), {
                    message: "Invalid intensity level",
                }),
        })
    ),
    note: z.string().max(500).optional(),
});

export const exercisesGetSchema = z.object({
    userId: z.string().uuid("Invalid user ID format"),
    from: z.string().datetime("Invalid date format").optional(),
    to: z.string().datetime("Invalid date format").optional(),
});
