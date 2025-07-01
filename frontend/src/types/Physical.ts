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