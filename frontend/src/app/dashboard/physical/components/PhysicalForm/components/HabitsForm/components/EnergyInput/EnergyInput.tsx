import React from "react";

import { HabitsRecord } from "@/types/Physical";
import { Control } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { capitalizeFirstLetter } from "@/lib/utils";
import { habitsEnergy } from "@/lib/schemas/Habits";

type EnergyInputProps = {
    control: Control<HabitsRecord, unknown, HabitsRecord>;
};

const EnergyInput = ({ control }: EnergyInputProps) => {
    return (
        <FormField
            control={control}
            name="energyLevel"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Energy Level</FormLabel>
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
                            {habitsEnergy.map((option, ix) => (
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

export default EnergyInput;
