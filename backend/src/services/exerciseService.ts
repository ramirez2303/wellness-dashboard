import prisma from "../lib/prisma";
import { ExercisesPropType } from "../types";
import { calculateCaloriesBurned, generateId } from "../utils/utils";

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
    const exerciseEntries = await prisma.exerciseRecord.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        include: {
            exercises: true,
        },
    });

    if (from && to) {
        const filtered = exerciseEntries.filter((item) => {
            return item.date >= from && item.date <= to;
        });

        return { filtered };
    }

    return { exerciseEntries };
};
