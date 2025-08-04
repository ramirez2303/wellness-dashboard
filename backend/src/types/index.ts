import { z } from "zod";
import {
    editUserSchema,
    loginSchema,
    registerSchema,
} from "../schemas/authSchema";
import { mentalSchema } from "../schemas/mentalSchema";
import { exercisesSchema } from "../schemas/exercisesSchema";
import { habitsSchema } from "../schemas/habitsSchema";

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
export type EditUserPropsType = z.infer<typeof editUserSchema>;

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
    date: string;
    createdAt: string;
}

export type MentalPropType = z.infer<typeof mentalSchema>;

export interface Exercise {
    type: "RUN" | "BIKE" | "GYM" | "SWIM" | "YOGA" | "WALK";
    duration: number;
    intensity: "LOW" | "MEDIUM" | "HIGH";
}

export interface PhysicalEntry {
    id: string;
    userId: string;
    date: string;
    exercises: Exercise[];
    note?: string;
    caloriesBurned: number;
    createdAt: string;
}

export type ExercisesPropType = z.infer<typeof exercisesSchema>;

export interface HabitEntry {
    userId: string;
    date?: string;
    sleepHours: number;
    waterLiters: number;
    energyLevel: "LOW" | "MEDIUM" | "HIGH";
    note?: string;
}

export type HabitsPropType = z.infer<typeof habitsSchema>;
