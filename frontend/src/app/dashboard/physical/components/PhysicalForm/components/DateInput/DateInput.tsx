import SingleDatePicker from "@/components/ui/DatePicker/SingleDatePicker";
import React from "react";

type DateInputProps = {
    date?: string;
    handleSetDate: (date: string | undefined) => void;
};

const DateInput = ({ date, handleSetDate }: DateInputProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-base font-regular">Date</label>
            <SingleDatePicker
                placeholder="Pick a date"
                date={date ? new Date(date) : undefined}
                handleDateChange={(date) =>
                    handleSetDate(date ? date.toISOString() : undefined)
                }
            />
        </div>
    );
};

export default DateInput;
