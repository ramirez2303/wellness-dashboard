import { Request, Response } from "express";
import * as authService from "../services/authService";
import { User } from "../types";

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await authService.registerUser(email, password);
    res.status(201).json({ token });
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const token = await authService.loginUser(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ error: "Invalid credentials" });
    }
};

export const getProfile = (req: Request & { user?: User }, res: Response) => {
    res.status(200).json({ message: "Welcome to profile", user: req.user });
};
