// auth.ts
import { NextFunction, Request, Response } from "express";
import { signToken, verifyToken } from "../lib/jwt";
import { AuthUser } from "../types";

export const generateToken = (user: AuthUser): string => {
    return signToken({ id: user.id, email: user.email });
};

export const authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json({ message: "No token" });
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = verifyToken(token);
        (req as any).user = payload;
        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
};
