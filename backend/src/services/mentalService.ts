import { endOfDay, startOfDay, subDays } from "date-fns";
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

export const getMentalRecords = async (
    userId: string,
    from?: Date,
    to?: Date
) => {
    const today = new Date();

    const gte = from ? new Date(from) : startOfDay(subDays(today, 6));

    const lte = to ? new Date(to) : endOfDay(today);

    const mentalEntries = await prisma.mentalState.findMany({
        where: {
            userId,
            date: {
                gte,
                lte,
            },
        },
        orderBy: { createdAt: "desc" },
    });

    return { mentalEntries };
};
