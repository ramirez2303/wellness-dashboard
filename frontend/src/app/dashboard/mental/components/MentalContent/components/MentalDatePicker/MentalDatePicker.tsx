import useMentalStore from "@/app/dashboard/mental/store/useMentalStore";
import { useRangeDatePicker } from "@/app/dashboard/physical/hooks/useRangeDatePicker";
import RangeDatePicker from "@/components/ui/DatePicker/RangeDatePicker";
import { X } from "lucide-react";
import React from "react";

const MentalDatePicker = () => {
    const { setSelectedDate } = useMentalStore();
    const { date, handleDateChange, handleClearDate } =
        useRangeDatePicker(setSelectedDate);
    return (
        <div className="w-full relative">
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

export default MentalDatePicker;
