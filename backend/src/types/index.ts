import { z } from "zod";
import { loginSchema, registerSchema } from "../schemas/authSchema";

export interface AuthUser {
    id: string;
    email: string;
    passwordHash: string;
}

export interface User {
    id: string;
    email: string;
    username: string;
    createdAt: Date;
}

export type RegisterPropsType = z.infer<typeof registerSchema>;
export type LoginPropsType = z.infer<typeof loginSchema>;
