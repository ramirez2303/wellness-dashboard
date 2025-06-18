import DatePicker from "@/components/ui/DatePicker";
import React from "react";

const MentalDatePicker = () => {
    return (
        <div className="flex flex-col w-full justify-start gap-2">
            <DatePicker />
            <DatePicker />
        </div>
    );
};

export default MentalDatePicker;
