import { api } from "@/lib/api";
import { MentalRecordParam } from "@/types/Mental";

export const postMentalRecord = async (data: MentalRecordParam) => {
    const response = await api.post(`/mental`, data);
    return response.data;
};

export const getMentalRecord = async (userId?: string) => {
    const response = await api.get(
        `/mental${userId ? `?userId=${userId}` : ""}`
    );
    return response.data;
};
