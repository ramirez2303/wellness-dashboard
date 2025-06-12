import prisma from "../lib/prisma";
import { MentalPropType } from "../types";
import { generateId } from "../utils/utils";

export const createMentalRecord = async (data: MentalPropType) => {
    const { userId, mood, note } = data;

    const mentalEntry = await prisma.mentalState.create({
        data: {
            id: generateId(),
            userId,
            mood,
            note,
            createdAt: new Date().toISOString(),
        },
    });

    return { mentalEntry };
};

export const getMentalRecords = async (userId: string) => {
    const mentalEntries = await prisma.mentalState.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    });

    return { mentalEntries };
};
