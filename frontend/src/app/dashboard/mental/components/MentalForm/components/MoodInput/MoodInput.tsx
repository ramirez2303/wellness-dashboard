import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { moodOptions } from "@/lib/Schemas";
import { capitalizeFirstLetter } from "@/lib/utils";
import { MentalRecord } from "@/types/Mental";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Control } from "react-hook-form";

type MoodInputProps = {
    control: Control<MentalRecord, unknown, MentalRecord>;
};

const MoodInput = ({ control }: MoodInputProps) => {
    return (
        <FormField
            control={control}
            name="mood"
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="">Mood</FormLabel>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                    >
                        <FormControl>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Enter your mood" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-80">
                            {moodOptions.map((option, ix) => (
                                <SelectItem key={option + ix} value={option}>
                                    {capitalizeFirstLetter(option)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormItem>
            )}
        />
    );
};

export default MoodInput;
