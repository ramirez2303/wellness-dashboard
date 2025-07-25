"use client";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { Mode } from "fs";

type DatePickerProps = {
    date?: DateRange;
    handleDateChange: (date: DateRange) => void;
    mode?: Mode;
};

const DatePicker = ({
    date,
    handleDateChange,
    mode = "single",
}: DatePickerProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="w-full h-fit py-2 data-[empty=true]:text-muted-foreground justify-start text-left text-base font-normal shadow-sm cursor-pointer border-[#a1a1a179]"
                >
                    <CalendarIcon />
                    {date?.from && date.to ? (
                        `${format(date.from, "PPP")} - ${format(
                            date.to,
                            "PPP"
                        )}`
                    ) : (
                        <span>Last 7 days</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                {mode === "single" ? (
                    <Calendar mode="single" />
                ) : (
                    <Calendar
                        mode="range"
                        selected={date}
                        onSelect={(date) => date && handleDateChange(date)}
                        min={1}
                        max={6}
                    />
                )}
            </PopoverContent>
        </Popover>
    );
};

export default DatePicker;
