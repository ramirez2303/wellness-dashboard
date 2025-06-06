import { ZodSchema } from "zod";
import { NextFunction, Request, Response } from "express";

export const validateBody =
    (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                error: "Invalid Body",
                detalles: result.error.errors,
            });
            return;
        }
        req.body = result.data;
        next();
    };

export const validateParams =
    (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.params);
        if (!result.success) {
            res.status(404).json({
                error: "User not found",
                detalles: result.error.errors,
            });
            return;
        }
        req.params = result.data;
        next();
    };

export const validateQuery =
    (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.query);
        if (!result.success) {
            res.status(400).json({
                error: "Invalid Query",
                details: result.error.errors.map((error) => ({
                    path: error.path,
                    message: error.message,
                })),
            });
            return;
        }
        req.params = result.data;
        next();
    };
