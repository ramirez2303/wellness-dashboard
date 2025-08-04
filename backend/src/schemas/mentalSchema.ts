import { z } from "zod";

const moodOptions = [
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
    userId: z.string().uuid("Invalid user ID format"),
    mood: z.enum(moodOptions),
    date: z.string().datetime("Invalid date format").optional(),
    note: z.string().max(500).optional(),
});

export const getMentalSchema = z.object({
    userId: z.string().uuid("Invalid user ID format"),
    from: z.string().datetime("Invalid date format").optional(),
    to: z.string().datetime("Invalid date format").optional(),
});
