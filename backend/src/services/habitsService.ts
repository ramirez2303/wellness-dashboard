import prisma from "../lib/prisma";
import { HabitsPropType } from "../types";
import { generateId } from "../utils/utils";
import { startOfDay, subDays, endOfDay } from "date-fns";

export const createHabitRecord = async (data: HabitsPropType) => {
    const { userId, date, sleepHours, waterLiters, energyLevel, note } = data;

    const habitsEntry = await prisma.physicalHabit.create({
        data: {
            id: generateId(),
            userId,
            date: date
                ? new Date(date).toISOString()
                : new Date().toISOString(),
            createdAt: new Date().toISOString(),
            sleepHours,
            waterLiters,
            energyLevel,
            note,
        },
    });

    return { habitsEntry };
};

export const getHabitsRecord = async (
    userId: string,
    from?: Date,
    to?: Date
) => {
    const today = new Date();

    const gte = from ? new Date(from) : startOfDay(subDays(today, 6));

    const lte = to ? new Date(to) : endOfDay(today);

    const habitsEntries = await prisma.physicalHabit.findMany({
        where: {
            userId,
            date: {
                gte,
                lte,
            },
        },
        orderBy: { date: "desc" },
    });

    return { habitsEntries };
};
