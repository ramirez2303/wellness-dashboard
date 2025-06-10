import { UserLogin, UserRegister } from "@/types/User";
import axios from "axios";

const authApi = axios.create({
    baseURL: "http://localhost:4000/api/auth",
});

export const register = (data: UserRegister) => authApi.post(`/register`, data);

export const login = (data: UserLogin) => authApi.post(`/login`, data);

export const getProfile = async (token: string) =>
    await authApi.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
    });
