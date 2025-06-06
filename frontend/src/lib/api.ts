import axios from "axios";

const API = "http://localhost:4000/api/auth";

export const register = (data: { username: string; password: string }) =>
    axios.post(`${API}/register`, data);

export const login = (data: { username: string; password: string }) =>
    axios.post(`${API}/login`, data);

export const getProfile = (token: string) =>
    axios.get(`${API}`, { headers: { Authorization: `Bearer ${token}` } });
