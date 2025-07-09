import { Request, Response } from "express";
import * as mentalService from "../services/mentalService";

export const createMentalRecord = async (req: Request, res: Response) => {
    try {
        const data = await mentalService.createMentalRecord(req.body);
        res.status(200).json({
            data,
            message: "Mental record created successfully",
        });
    } catch (error) {
        res.status(401).json({
            error: error instanceof Error ? error.message : "Invalid data",
        });
    }
};

export const getMentalRecords = async (req: Request, res: Response) => {
    try {
        const { userId, from, to } = req.params;
        const data = await mentalService.getMentalRecords(
            userId,
            from ? new Date(from) : undefined,
            to ? new Date(to) : undefined
        );
        res.status(200).json({
            data: data.mentalEntries,
            message: "Mental records retrieved successfully",
        });
    } catch (error) {
        res.status(400).json({
            error: "Failed to retrieve records",
        });
    }
};
