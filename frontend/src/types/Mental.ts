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

export interface MentalRecord {
    mood: MentalStates;
    date?: string;
    note?: string;
}

export interface MentalRecordParam extends MentalRecord {
    userId: string;
}

export interface MentalRecordData {
    id: string;
    mood: MentalStates;
    note?: string;
    date: string;
    createdAt: string;
    updatedAt: string;
}
export interface MentalRecordResponse {
    message: string;
    data: MentalRecordData[];
}
