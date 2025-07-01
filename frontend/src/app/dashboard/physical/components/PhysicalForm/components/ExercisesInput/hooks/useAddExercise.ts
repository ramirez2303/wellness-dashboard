import { Exercise } from "@/types/Physical";
import { useState } from "react";

export const useAddExercise = () => {
    const [exerciseValues, setExerciseValues] = useState<Exercise | null>(null);

    const handleSetValues = (key: keyof Exercise, value: string | number) => {
        setExerciseValues((prevValues) => {
            return { ...prevValues, [key]: value } as Exercise;
        });
    };

    return { exerciseValues, handleSetValues };
};
