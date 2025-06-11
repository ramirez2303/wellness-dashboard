import { UserLogin, UserRegister } from "@/types/User";
import axios from "axios";

const authApi = axios.create({
    baseURL: "http://localhost:4000/api/auth",
});

export const register = async (data: UserRegister) => {
    const response = await authApi.post(`/register`, data);
    return response.data;
};

export const login = async (data: UserLogin) => {
    const response = await authApi.post(`/login`, data);
    return response.data;
};

export const getProfile = async (token: string) =>
    await authApi.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
    });
