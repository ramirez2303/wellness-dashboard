export interface Exercise {
    key: string;
    type: "RUN" | "BIKE" | "GYM" | "SWIM" | "YOGA" | "WALK" | "";
    duration: number;
    intensity: "LOW" | "MEDIUM" | "HIGH" | "";
}

export interface PhysicalRecord {
    exercises: Exercise[];
    note?: string;
}

export interface PhysicalRecordParam extends PhysicalRecord {
    userId: string;
}
