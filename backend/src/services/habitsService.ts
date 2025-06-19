import prisma from "../lib/prisma";
import { HabitsPropType } from "../types";
import { generateId } from "../utils/utils";

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
    const habitsEntry = await prisma.physicalHabit.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
    });

    if (from && to) {
        const filtered = habitsEntry.filter((item) => {
            return item.date >= from && item.date <= to;
        });

        return { filtered };
    }

    return { habitsEntry };
};
