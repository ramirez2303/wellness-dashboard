import bcrypt from "bcryptjs";
import { signToken } from "../lib/jwt";
import { generateId } from "../utils/utils";
import prisma from "../lib/prisma";

export const registerUser = async (email: string, password: string) => {
    // Check if user already exists
    const existingUser = await prisma.authUser.findUnique({
        where: { email }
    });
    
    if (existingUser) {
        throw new Error("User with this email already exists");
    }
    
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.authUser.create({
        data: { id: generateId(), email, passwordHash },
    });
    const token = signToken({ id: user.id });
    return token;
};

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.authUser.findFirst({ where: { email } });
    if (!user) throw new Error("User not found");
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new Error("Invalid credentials");
    return signToken({ id: user.id });
};
