import { generateId } from "@/app/utils";
import { exercisesSchema } from "@/lib/Schemas";
import {
    Exercise,
    PhysicalRecord,
    // PhysicalRecordParam,
} from "@/types/Physical";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const useHandleExercisesRecord = () => {
    // const { user, setIsOpenSidebar } = useUserStore();
    // const { toggleRefetchData } = useMentalStore();
    const [canAddExercises, setCanAddExercises] = useState(false);
    const form = useForm<PhysicalRecord>({
        resolver: zodResolver(exercisesSchema),
        mode: "onChange",
        defaultValues: {
            exercises: [
                { key: generateId(), type: "", duration: 0, intensity: "" },
            ],
            note: undefined,
        },
    });

    const handleAddExercise = () => {
        const currentExercises = form.getValues().exercises;
        form.setValue("exercises", [
            ...currentExercises,
            { key: generateId(), type: "", duration: 0, intensity: "" }, // Nuevo ejercicio vacío
        ]);
        setCanAddExercises(false);
    };

    const handleConfirmClick = (index: number, value: Exercise) => {
        const currentExercises = form.getValues().exercises;
        currentExercises[index] = value; // Actualiza el ejercicio en el índice correspondiente
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
            currentExercises.splice(index, 1); // Elimina el ejercicio en el índice correspondiente
            form.setValue("exercises", currentExercises);
        }
    };

    // const { mutateAsync } = useMutation({
    //     mutationFn: postMentalRecord,
    //     onSuccess: () => {
    //         setIsOpenSidebar(false);
    //         toggleRefetchData();
    //         form.reset();
    //     },
    //     onError: (error) => {
    //         console.log("Mental Record failed:", error);
    //     },
    // });

    // const onSubmit = (data: PhysicalRecord) => {
    // mutateAsync({ ...data, userId: user?.id } as PhysicalRecordParam);
    // };

    // const handleFormSubmit = form.handleSubmit(onSubmit);

    const submitDisabled =
        !form.formState.isValid || form.formState.isSubmitting;

    return {
        form,
        submitDisabled,
        handleAddExercise,
        handleConfirmClick,
        handleRemoveClick,
        canAddExercises,
    };
};
