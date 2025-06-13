import { api } from "@/lib/api";
import { UserLogin, UserRegister } from "@/types/User";

export const register = async (data: UserRegister) => {
    const response = await api.post(`/auth/register`, data);
    return response.data;
};

export const login = async (data: UserLogin) => {
    const response = await api.post(`/auth/login`, data);
    return response.data;
};
