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

export const editDataSchema = z
    .object({
        firstname: z
            .string()
            .min(2, "Firstname must be at least 2 characters")
            .max(50, "Firstname must be less than 50 characters")
            .optional(),
        lastname: z
            .string()
            .min(2, "Lastname must be at least 2 characters")
            .max(50, "Lastname must be less than 50 characters")
            .optional(),
        email: z
            .string()
            .email("Invalid email address")
            .min(5, "Email must be at least 5 characters")
            .max(100, "Email must be less than 100 characters")
            .optional(),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(100, "Password must be less than 100 characters")
            .optional(),
        birthdate: z.string().datetime("Invalid date format").optional(),
        country: z
            .string()
            .min(2, "Country must be at least 2 characters")
            .max(50, "Country must be less than 50 characters")
            .optional(),
        phoneNumber: z
            .string()
            .min(1, "Phone number must be at least 10 digits")
            .max(9999999999, "Phone number must be less than 11 digits")
            .optional(),
    })
    .refine(
        (data) =>
            data.firstname ||
            data.lastname ||
            data.email ||
            data.password ||
            data.birthdate ||
            data.country ||
            data.phoneNumber,
        {
            message: "At least one field must be provided for update",
            path: [
                "firstname",
                "lastname",
                "email",
                "password",
                "birthdate",
                "country",
                "phoneNumber",
            ],
        }
    );

export const editUserSchema = z.object({
    userId: z.string().uuid("Invalid user ID format"),
    data: editDataSchema,
});
