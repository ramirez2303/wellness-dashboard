import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email().min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export const RegisterSchema = z.object({
    email: z.string().email().min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    firstname: z.string().min(1, "Firstname is required"),
    lastname: z.string().min(1, "Lastname is required"),
});

export const moodOptions = [
    "HAPPY",
    "EXCITED",
    "ENERGETIC",
    "PROUD",
    "MOTIVATED",
    "LOVED",
    "GRATEFUL",
    "CALM",
    "HOPEFUL",
    "CONFIDENT",
    "NEUTRAL",
    "TIRED",
    "BORED",
    "DISTRACTED",
    "INDIFFERENT",
    "REFLECTIVE",
    "SAD",
    "ANGRY",
    "ANXIOUS",
    "WORRIED",
    "FRUSTRATED",
    "OVERWHELMED",
    "LONELY",
    "EMBARRASSED",
    "STRESSED",
    "GUILTY",
    "HOPELESS",
] as const;

export const mentalSchema = z.object({
    mood: z.enum(moodOptions),
    note: z.string().max(500).optional(),
});

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
