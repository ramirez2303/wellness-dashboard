"use client";

import React from "react";
import { useRangeDatePicker } from "../../hooks/useRangeDatePicker";
import usePhysicalStore from "../../store/usePhysicalStore";
import { X } from "lucide-react";
import RangeDatePicker from "@/components/ui/DatePicker/RangeDatePicker";

const PhysicalDatePicker = () => {
    const { setSelectedDate } = usePhysicalStore();
    const { date, handleDateChange, handleClearDate } =
        useRangeDatePicker(setSelectedDate);
    return (
        <div className="w-full md:max-w-[350px] relative">
            <RangeDatePicker
                placeholder="Last 7 days"
                date={date}
                handleDateChange={handleDateChange}
            />
            {date?.from && date?.to && (
                <X
                    className="absolute top-[5px] right-2 w-8 h-8 text-[#555] font-regular duration-300 ease-in-out cursor-pointer rounded-full p-1"
                    onClick={handleClearDate}
                />
            )}
        </div>
    );
};

export default PhysicalDatePicker;
