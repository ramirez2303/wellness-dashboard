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

export const optionsIntensity = ["LOW", "MEDIUM", "HIGH"];

type ExercisesIntensityProps = {
    value?: Exercise["intensity"];
    handleSetValues: (key: keyof Exercise, value: string | number) => void;
};

const ExercisesIntensity = ({ handleSetValues }: ExercisesIntensityProps) => {
    return (
        <Select onValueChange={(value) => handleSetValues("intensity", value)}>
            <SelectTrigger className="w-full col-span-5">
                <SelectValue placeholder="Intensity" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
                {optionsIntensity.map((option, ix) => (
                    <SelectItem key={option + ix} value={option}>
                        {capitalizeFirstLetter(option)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default ExercisesIntensity;
