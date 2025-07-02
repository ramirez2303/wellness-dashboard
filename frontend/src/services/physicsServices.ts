import {
    ExercisesRecordParam,
    HabitsRecordParam,
} from "@/app/dashboard/physical/types/Physical";
import { api } from "@/lib/api";

export const postExercisesRecord = async (data: ExercisesRecordParam) => {
    const response = await api.post(`/physical/exercise`, data);
    return response.data;
};

export const getExercisesRecord = async (
    userId?: string,
    from?: string,
    to?: string
) => {
    const response = await api.get(
        `/physical/exercise${userId ? `?userId=${userId}` : ""}${
            from ? `&from=${from}` : ""
        }${to ? `&to=${to}` : ""}`
    );
    return response.data;
};

export const postHabitsRecord = async (data: HabitsRecordParam) => {
    const response = await api.post(`/physical/habits`, data);
    return response.data;
};

export const getHabitsRecord = async (
    userId?: string,
    from?: string,
    to?: string
) => {
    const response = await api.get(
        `/physical/habits${userId ? `?userId=${userId}` : ""}${
            from ? `&from=${from}` : ""
        }${to ? `&to=${to}` : ""}`
    );
    return response.data;
};
