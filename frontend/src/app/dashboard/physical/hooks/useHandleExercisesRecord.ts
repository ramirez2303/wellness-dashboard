import {
    Exercise,
    ExercisesRecord,
    ExercisesRecordParam,
} from "@/app/dashboard/physical/types/Physical";
import { generateId } from "@/app/utils";
import { exercisesSchema } from "@/lib/schemas/Exercises";
import { postExercisesRecord } from "@/services/physicsServices";
import useUserStore from "@/store/user/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import usePhysicalStore from "../store/usePhysicalStore";

export const useHandleExercisesRecord = () => {
    const { user } = useUserStore();
    const { toggleRefetchData, toggleFormOpen } = usePhysicalStore();
    const [canAddExercises, setCanAddExercises] = useState(false);
    const form = useForm<ExercisesRecord>({
        resolver: zodResolver(exercisesSchema),
        mode: "onChange",
        defaultValues: {
            exercises: [
                { key: generateId(), type: "", duration: 0, intensity: "" },
            ],
            date: undefined,
            note: undefined,
        },
    });

    const handleSetDate = (date?: string) => {
        form.setValue("date", date);
        form.trigger("date");
    };

    const handleAddExercise = () => {
        const currentExercises = form.getValues().exercises;
        form.setValue("exercises", [
            ...currentExercises,
            { key: generateId(), type: "", duration: 0, intensity: "" },
        ]);
        setCanAddExercises(false);
    };

    const handleConfirmClick = (index: number, value: Exercise) => {
        const currentExercises = form.getValues().exercises;
        currentExercises[index] = value;
        form.setValue("exercises", currentExercises);
        setCanAddExercises(true);
    };

    const handleRemoveClick = (index: number) => {
        const currentExercises = form.getValues().exercises;
        if (form.getValues().exercises.length <= 1) {
            form.setValue("exercises", [
                {
                    key: generateId(),
                    type: "",
                    duration: 0,
                    intensity: "",
                },
            ]);
        } else {
            currentExercises.splice(index, 1);
            form.setValue("exercises", currentExercises);
        }
    };

    const { mutateAsync } = useMutation({
        mutationFn: postExercisesRecord,
        onSuccess: () => {
            toggleRefetchData("exercises");
            toggleFormOpen();
            form.reset();
        },
        onError: (error) => {
            console.log("Mental Record failed:", error);
        },
    });

    const onSubmit = (data: ExercisesRecord) => {
        mutateAsync({ ...data, userId: user?.id } as ExercisesRecordParam);
    };

    const handleFormSubmit = form.handleSubmit(onSubmit);

    const submitDisabled =
        !form.formState.isValid || form.formState.isSubmitting;

    return {
        form,
        submitDisabled,
        handleSetDate,
        handleFormSubmit,
        handleAddExercise,
        handleConfirmClick,
        handleRemoveClick,
        canAddExercises,
    };
};
