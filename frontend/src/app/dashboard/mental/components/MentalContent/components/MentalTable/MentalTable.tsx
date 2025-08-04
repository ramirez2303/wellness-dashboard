"use client";

import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { MentalRecordData } from "@/types/Mental";
import { capitalizeFirstLetter } from "../../../../../../../lib/utils";
import Button from "@/components/common/Button";

interface MentalTableProps {
    data?: MentalRecordData[];
}

const ITEMS_PER_PAGE = 10;

const MentalTable = ({ data }: MentalTableProps) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil((data?.length ?? 0) / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentData = data?.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    return (
        <Card className="col-span-4 px-6 py-2 w-full flex flex-col justify-between">
            <Table className="w-full">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Fecha</TableHead>
                        <TableHead className="w-[150px]">Emoción</TableHead>
                        <TableHead>Nota</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentData?.map((entry) => (
                        <TableRow key={entry.id}>
                            <TableCell>
                                {new Date(entry.date).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                                {capitalizeFirstLetter(entry.mood)}
                            </TableCell>
                            <TableCell>
                                {capitalizeFirstLetter(entry.note || "-")}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Controles de paginación */}
            <div className="flex justify-end items-center gap-4 pb-2">
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

export default MentalTable;
