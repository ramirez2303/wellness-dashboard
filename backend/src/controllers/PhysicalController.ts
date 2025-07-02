import { Request, Response } from "express";
import * as exerciseService from "../services/exerciseService";
import * as habitsService from "../services/habitsService";

export const createPhysicalExerciseRecord = async (
    req: Request,
    res: Response
) => {
    try {
        const data = await exerciseService.createExerciseRecord(req.body);
        res.status(200).json({
            data,
            message: "Exercise record created successfully",
        });
    } catch (error) {
        res.status(401).json({
            error: error instanceof Error ? error.message : "Invalid data",
        });
    }
};

export const getPhysicalExeciseRecord = async (req: Request, res: Response) => {
    try {
        const { userId, from, to } = req.params;
        const data = await exerciseService.getExerciseRecords(
            userId,
            from ? new Date(from) : undefined,
            to ? new Date(to) : undefined
        );
        res.status(200).json({
            data: data.exerciseEntries,
            message: "Exercise records retrieved successfully",
        });
    } catch (error) {
        res.status(401).json({
            error: error instanceof Error ? error.message : "Invalid data",
        });
    }
};

export const createPhysicalHabitsRecord = async (
    req: Request,
    res: Response
) => {
    try {
        const data = await habitsService.createHabitRecord(req.body);
        res.status(200).json({
            data: data.habitsEntry,
            message: "Habit record created successfully",
        });
    } catch (error) {
        res.status(401).json({
            error: error instanceof Error ? error.message : "Invalid data",
        });
    }
};

export const getPhysicalHabitsRecord = async (req: Request, res: Response) => {
    try {
        const { userId, from, to } = req.params;
        const data = await habitsService.getHabitsRecord(
            userId,
            from ? new Date(from) : undefined,
            to ? new Date(to) : undefined
        );
        res.status(200).json({
            data: data.habitsEntries,
            message: "Exercise records retrieved successfully",
        });
    } catch (error) {
        res.status(401).json({
            error: error instanceof Error ? error.message : "Invalid data",
        });
    }
};
