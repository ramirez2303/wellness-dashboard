"use client";

import React from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { ExercisesRecordData } from "@/app/dashboard/physical/types/Physical";
import { usePagination } from "@/hooks/usePagination";
import { capitalizeFirstLetter } from "@/lib/utils";
import Button from "@/components/common/Button";
import { getFlattenExerciseRecords } from "../../utils";

type ExercisesTableProps = {
    data?: ExercisesRecordData[];
};

const ExercisesTable = ({ data }: ExercisesTableProps) => {
    const { currentPage, totalPages, currentData, nextPage, prevPage } =
        usePagination(getFlattenExerciseRecords(data ?? []), 8);

    return (
        <Card className="h-fit col-span-4 row-span-1 px-6 py-4 w-full h-[420px] flex flex-col justify-between">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Duración (min)</TableHead>
                        <TableHead>Intensidad</TableHead>
                        <TableHead>Calorías</TableHead>
                        <TableHead>Nota</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentData.map((exercise) => (
                        <TableRow key={exercise.exerciseId}>
                            <TableCell>
                                {new Date(exercise.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                                {capitalizeFirstLetter(exercise.type)}
                            </TableCell>
                            <TableCell>{exercise.duration}</TableCell>
                            <TableCell>
                                {capitalizeFirstLetter(exercise.intensity)}
                            </TableCell>
                            <TableCell>{exercise.caloriesBurned}</TableCell>
                            <TableCell
                                className="overflow-hidden text-ellipsis"
                                style={{ maxWidth: "120px", minWidth: "120px" }}
                            >
                                {capitalizeFirstLetter(exercise.note) || "-"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Controles de paginación */}
            <div className="flex justify-end items-center gap-4">
                <Button
                    variant="primary-outlined"
                    className="border-2 px-2 py-1 text-sm font-normal rounded-lg hover:text-white cursor-pointer"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Anterior
                </Button>
                <span className="text-sm">
                    Página {currentPage} de {totalPages}
                </span>
                <Button
                    variant="primary-outlined"
                    className="border-2 px-2 py-1 text-sm font-normal rounded-lg hover:text-white cursor-pointer"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </Button>
            </div>
        </Card>
    );
};

export default ExercisesTable;
