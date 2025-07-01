import { HabitsRecord } from "@/types/Physical";
import React from "react";
import { Control } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type WaterInputProps = {
    control: Control<HabitsRecord, unknown, HabitsRecord>;
};

const WaterInput = ({ control }: WaterInputProps) => {
    return (
        <FormField
            control={control}
            name="waterLiters"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Water Liters</FormLabel>
                    <FormControl>
                        <Input
                            type="number"
                            placeholder="Enter sleep hours"
                            className="h-[42px] w-full border-input border border-gray-300 shadow-sm text-base rounded-lg"
                            {...field}
                            onChange={(e) =>
                                field.onChange(e.target.valueAsNumber)
                            }
                        />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};

export default WaterInput;
