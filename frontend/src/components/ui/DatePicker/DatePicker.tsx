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

type DatePickerProps = {
    date?: DateRange;
    handleDateChange: (date: DateRange) => void;
};

const DatePicker = ({ date, handleDateChange }: DatePickerProps) => {
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
                        <span>Pick a date</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="range"
                    selected={date}
                    onSelect={(date) => date && handleDateChange(date)}
                    min={1}
                    max={6}
                />
            </PopoverContent>
        </Popover>
    );
};

export default DatePicker;
