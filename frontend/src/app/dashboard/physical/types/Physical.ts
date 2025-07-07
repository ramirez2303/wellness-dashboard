import { BarChartData, LinearChartData, PieChartData } from "@/types/Charts";

export interface Exercise {
    key: string;
    type: "RUN" | "BIKE" | "GYM" | "SWIM" | "YOGA" | "WALK" | "";
    duration: number;
    intensity: "LOW" | "MEDIUM" | "HIGH" | "";
}

export interface ExercisesRecord {
    exercises: Exercise[];
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

export interface HabitsRecord {
    sleepHours: number;
    waterLiters: number;
    energyLevel: "LOW" | "MEDIUM" | "HIGH";
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
