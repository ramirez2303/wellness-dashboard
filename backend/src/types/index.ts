import { z } from "zod";
import { loginSchema, registerSchema } from "../schemas/authSchema";
import { mentalSchema } from "../schemas/mentalSchema";

export interface AuthUser {
    id: string;
    email: string;
    passwordHash: string;
}

export interface User {
    id: string;
    email: string;
    username: string;
    createdAt: Date;
}

export type RegisterPropsType = z.infer<typeof registerSchema>;
export type LoginPropsType = z.infer<typeof loginSchema>;

export type MentalStates =
    | "HAPPY"
    | "EXCITED"
    | "ENERGETIC"
    | "PROUD"
    | "MOTIVATED"
    | "LOVED"
    | "GRATEFUL"
    | "CALM"
    | "HOPEFUL"
    | "CONFIDENT"
    | "NEUTRAL"
    | "TIRED"
    | "BORED"
    | "DISTRACTED"
    | "INDIFFERENT"
    | "REFLECTIVE"
    | "SAD"
    | "ANGRY"
    | "ANXIOUS"
    | "WORRIED"
    | "FRUSTRATED"
    | "OVERWHELMED"
    | "LONELY"
    | "EMBARRASSED"
    | "STRESSED"
    | "GUILTY"
    | "HOPELESS";

export interface MentalEntry {
    id: string;
    userId: string;
    mood: MentalStates;
    note?: string;
    createdAt: string;
}

export type MentalPropType = z.infer<typeof mentalSchema>;
