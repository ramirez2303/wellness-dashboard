import { Request, Response } from "express";
import * as authService from "../services/authService";
import { User } from "../types";

export const register = async (req: Request, res: Response) => {
    try {
        const data = await authService.registerUser(req.body);
        res.status(201).json({ data, message: "Registration successful" });
    } catch (error) {
        res.status(400).json({
            error:
                error instanceof Error ? error.message : "Registration failed",
        });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const data = await authService.loginUser(req.body);
        res.status(200).json({ data, message: "Login successful" });
    } catch (error) {
        res.status(401).json({ error: "Invalid credentials" });
    }
};

export const editProfile = async (req: Request, res: Response) => {
    try {
        const data = await authService.editUser(req.body);
        res.status(200).json({ data, message: "Profile updated successfully" });
    } catch (error) {
        res.status(400).json({
            error:
                error instanceof Error ? error.message : "Profile update failed",
        });
    }
};

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const data = await authService.getUserProfile(userId);
        res.status(200).json({ message: "Welcome to profile", user: data });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve profile" });
    }
};
