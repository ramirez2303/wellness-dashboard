import { useState } from "react";
import { DateRange } from "react-day-picker";

export const useRangeDatePicker = (
    setSelectedDate: (date?: DateRange) => void
) => {
    const [date, setDate] = useState<DateRange | undefined>(undefined);

    const handleDateChange = (date: DateRange) => {
        setDate(date);
        setSelectedDate(date);
    };

    const handleClearDate = () => {
        setDate(undefined);
        setSelectedDate(undefined);
    };

    return {
        date,
        handleDateChange,
        handleClearDate,
    };
};
