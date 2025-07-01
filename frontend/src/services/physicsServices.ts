import { api } from "@/lib/api";
import { ExercisesRecordParam } from "@/types/Physical";

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
