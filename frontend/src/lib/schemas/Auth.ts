import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email().min(1, "mail_error"),
    password: z.string().min(8, "password_error"),
});

export const RegisterSchema = z.object({
    email: z.string().email().min(1, "mail_error"),
    password: z.string().min(8, "password_error"),
    firstname: z.string().min(1, "first_name_error"),
    lastname: z.string().min(1, "last_name_error"),
});
