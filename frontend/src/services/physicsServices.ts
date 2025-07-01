import { api } from "@/lib/api";
import { ExercisesRecordParam, HabitsRecordParam } from "@/types/Physical";

export const postExercisesRecord = async (data: ExercisesRecordParam) => {
    const response = await api.post(`/physical/exercise`, data);
    return response.data;
};

export const getExercisesRecord = async (userId?: string) => {
    const response = await api.get(
        `/physical/exercise${userId ? `?userId=${userId}` : ""}`
    );
    return response.data;
};

export const postHabitsRecord = async (data: HabitsRecordParam) => {
    const response = await api.post(`/physical/habits`, data);
    return response.data;
};

export const getHabitsRecord = async (userId?: string) => {
    const response = await api.get(
        `/physical/habits${userId ? `?userId=${userId}` : ""}`
    );
    return response.data;
};
