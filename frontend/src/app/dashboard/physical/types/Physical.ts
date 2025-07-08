import { BarChartData, LinearChartData, PieChartData } from "@/types/Charts";

// EXERCISES

export interface Exercise {
    key: string;
    id?: string;
    type: "RUN" | "BIKE" | "GYM" | "SWIM" | "YOGA" | "WALK" | "";
    duration: number;
    intensity: "LOW" | "MEDIUM" | "HIGH" | "";
}

export interface ExercisesRecord {
    exercises: Exercise[];
    date?: string;
    note?: string;
}

export interface ExercisesRecordParam extends ExercisesRecord {
    userId: string;
}

export interface ExercisesRecordData {
    id: string;
    userId: string;
    exercises: Exercise[];
    caloriesBurned: number;
    note: string;
    createdAt: string;
    date: string;
}

export interface ExercisesRecordResponse {
    message: string;
    data: ExercisesRecordData[];
}

export interface ExercisesChartFormatedData {
    caloriesBurned: BarChartData[];
    duration: BarChartData[];
    type: PieChartData[];
}

export type FlattenedExercise = {
    recordId: string;
    date: string;
    note: string;
    caloriesBurned: number;
    exerciseId: string;
    type: string;
    duration: number;
    intensity: string;
};

// HABITS

export interface HabitsRecord {
    sleepHours: number;
    waterLiters: number;
    energyLevel: "LOW" | "MEDIUM" | "HIGH";
    date?: string;
    note?: string;
}

export interface HabitsRecordParam extends HabitsRecord {
    userId: string;
}

export interface HabitsRecordData {
    id: string;
    userId: string;
    date: string;
    sleepHours: number;
    waterLiters: number;
    energyLevel: "LOW" | "MEDIUM" | "HIGH";
    note?: string;
    createdAt: string;
}

export interface HabitsRecordResponse {
    message: string;
    data: HabitsRecordData[];
}

export interface HabitsChartFormatedData {
    waterLiters: LinearChartData[];
    sleepHours: LinearChartData[];
    energyLevels: BarChartData[];
}
