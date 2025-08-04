import bcrypt from "bcryptjs";
import { signToken } from "../lib/jwt";
import { generateId } from "../utils/utils";
import prisma from "../lib/prisma";
import { LoginPropsType, RegisterPropsType } from "../types";

export const registerUser = async (data: RegisterPropsType) => {
    const { firstname, lastname, email, password } = data;

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            id: generateId(),
            email,
            passwordHash,
            firstname,
            lastname,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    });
    const { passwordHash: filteredPasswordHash, ...returnedUser } = user;
    return { ...returnedUser, token: signToken({ id: user.id }) };
};

export const loginUser = async (data: LoginPropsType) => {
    const { email, password } = data;
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) throw new Error("User not found");
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new Error("Invalid credentials");
    const { passwordHash, ...returnedUser } = user;
    return { ...returnedUser, token: signToken({ id: user.id }) };
};

export const getUserProfile = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user) throw new Error("User not found");
    const { passwordHash, ...filteredUser } = user;
    return filteredUser;
};
