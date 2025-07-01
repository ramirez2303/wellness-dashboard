import React from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Exercise } from "@/types/Physical";

export const optionsTypes = ["RUN", "BIKE", "GYM", "SWIM", "YOGA", "WALK"];

type ExercisesTypeProps = {
    value?: Exercise["type"];
    handleSetValues: (key: keyof Exercise, value: string | number) => void;
};

const ExercisesType = ({ handleSetValues }: ExercisesTypeProps) => {
    return (
        <Select onValueChange={(value) => handleSetValues("type", value)}>
            <SelectTrigger className="w-full col-span-5">
                <SelectValue placeholder="Exercise type" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
                {optionsTypes.map((option, ix) => (
                    <SelectItem key={option + ix} value={option}>
                        {capitalizeFirstLetter(option)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default ExercisesType;
