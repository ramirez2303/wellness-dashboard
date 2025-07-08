"use client";

import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

type SingleDatePickerProps = {
    date?: Date;
    handleDateChange: (date?: Date) => void;
    placeholder?: string;
};

const SingleDatePicker = ({
    date,
    handleDateChange,
    placeholder,
}: SingleDatePickerProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="w-full h-fit py-3 data-[empty=true]:text-muted-foreground justify-start text-left text-base font-normal shadow-sm cursor-pointer border-[#a1a1a179]"
                >
                    <CalendarIcon />
                    {date ? (
                        date.toLocaleDateString()
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    onSelect={(date) => {
                        handleDateChange(date);
                    }}
                />
            </PopoverContent>
        </Popover>
    );
};

export default SingleDatePicker;
