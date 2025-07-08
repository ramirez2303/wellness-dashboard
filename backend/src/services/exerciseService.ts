import prisma from "../lib/prisma";
import { ExercisesPropType } from "../types";
import { calculateCaloriesBurned, generateId } from "../utils/utils";
import { startOfDay, subDays, endOfDay } from "date-fns";

export const createExerciseRecord = async (data: ExercisesPropType) => {
    const { userId, date, exercises, note } = data;
    const exerciseRecordId = generateId();

    const exerciseEntry = await prisma.exerciseRecord.create({
        data: {
            id: exerciseRecordId,
            userId,
            date: date
                ? new Date(date).toISOString()
                : new Date().toISOString(),
            createdAt: new Date().toISOString(),
            exercises: {
                create: exercises.map((exercise) => ({
                    id: generateId(),
                    type: exercise.type,
                    duration: exercise.duration,
                    intensity: exercise.intensity,
                })),
            },
            note,
            caloriesBurned: calculateCaloriesBurned(exercises),
        },
        include: {
            exercises: true,
        },
    });

    return { exerciseEntry };
};

export const getExerciseRecords = async (
    userId: string,
    from?: Date,
    to?: Date
) => {
    const today = new Date();

    const gte = from ? new Date(from) : startOfDay(subDays(today, 6));

    const lte = to ? new Date(to) : endOfDay(today);

    const exerciseEntries = await prisma.exerciseRecord.findMany({
        where: {
            userId,
            date: {
                gte,
                lte,
            },
        },
        orderBy: { date: "desc" },
        include: {
            exercises: true,
        },
    });

    return { exerciseEntries };
};
