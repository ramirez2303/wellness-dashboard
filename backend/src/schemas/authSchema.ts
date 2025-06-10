import { z } from "zod";

export const registerSchema = z.object({
    firstname: z
        .string()
        .min(2, "Firstname must be at least 2 characters")
        .max(50, "Firstname must be less than 50 characters"),
    lastname: z
        .string()
        .min(2, "Lastname must be at least 2 characters")
        .max(50, "Lastname must be less than 50 characters"),
    email: z
        .string()
        .email("Invalid email address")
        .min(5, "Email must be at least 5 characters")
        .max(100, "Email must be less than 100 characters"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password must be less than 100 characters"),
});

export const loginSchema = z.object({
    email: z
        .string()
        .email("Invalid email address")
        .min(5, "Email must be at least 5 characters")
        .max(100, "Email must be less than 100 characters"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password must be less than 100 characters"),
});
