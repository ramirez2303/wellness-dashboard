"use client";

import { useHandleMentalRecord } from "@/app/dashboard/mental/hooks/useHandleMentalRecord";
import MentalBarChart from "./components/MentalBarChart";
import MentalDatePicker from "./components/MentalDatePicker";
import MentalPieChart from "./components/MentalPieChart";
import MentalTable from "./components/MentalTable";

const MentalContent = () => {
    const { data: mentalRecords } = useHandleMentalRecord();

    return (
        <div className="flex flex-col-reverse md:flex-col justify-start gap-4 mb-16 relative z-0">
            <div className="h-full flex flex-col md:grid md:grid-cols-6 gap-4 md:gap-8">
                <div className="flex flex-col justify-start col-span-2 gap-4">
                    <MentalDatePicker />
                    <MentalPieChart mentalRecords={mentalRecords} />
                </div>
                <MentalTable data={mentalRecords} />
            </div>
            <MentalBarChart mentalRecords={mentalRecords} />
        </div>
    );
};

export default MentalContent;
