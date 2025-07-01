import { z } from "zod";

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
