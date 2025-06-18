"use client";

import { useHandleMentalRecord } from "@/app/dashboard/hooks/useHandleMentalRecord";
import React from "react";
import MentalPieChart from "./MentalPieChart";

const MentalContent = () => {
    const { data: mentalRecords } = useHandleMentalRecord();
    console.log(mentalRecords);

    return (
        <div className="w-100 h-full">
            <MentalPieChart mentalRecords={mentalRecords} />
        </div>
    );
};

export default MentalContent;
