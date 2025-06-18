"use client";

import { useHandleMentalRecord } from "@/app/dashboard/hooks/useHandleMentalRecord";
import MentalPieChart from "./components/MentalPieChart";
import MentalBarChart from "./components/MentalBarChart";
import MentalDatePicker from "./components/MentalDatePicker";

const MentalContent = () => {
    const { data: mentalRecords } = useHandleMentalRecord();

    return (
        <div className="h-full grid grid-cols-6 gap-8">
            <div className="flex flex-col justify-start col-span-2 gap-4">
                <MentalDatePicker />
                <MentalPieChart mentalRecords={mentalRecords} />
            </div>
            <MentalBarChart mentalRecords={mentalRecords} />
        </div>
    );
};

export default MentalContent;
