"use client";

import { mentalSchema } from "@/lib/Schemas";
import { postMentalRecord } from "@/services/mentalServices";
import useUserStore from "@/store/user/useUserStore";
import { MentalRecord, MentalRecordParam } from "@/types/Mental";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useMentalStore from "../mental/store/useMentalStore";

export const useCreateMentalRecord = () => {
    const { user, setIsOpenSidebar } = useUserStore();
    const { toggleRefetchData } = useMentalStore();
    const form = useForm<MentalRecord>({
        resolver: zodResolver(mentalSchema),
        mode: "onChange",
        defaultValues: {
            mood: undefined,
            note: undefined,
        },
    });

    const [showSelect, setShowSelect] = useState(false);
    const toggleSelect = () => setShowSelect((prev) => !prev);

    const selectedMood = form.watch("mood");

    const handleButtonClick = (value?: string) => {
        form.setValue("mood", value as MentalRecord["mood"]);
    };

    const { mutateAsync } = useMutation({
        mutationFn: postMentalRecord,
        onSuccess: () => {
            setIsOpenSidebar(false);
            toggleRefetchData();
            form.reset();
        },
        onError: (error) => {
            console.log("Mental Record failed:", error);
        },
    });

    const onSubmit = (data: MentalRecord) => {
        mutateAsync({ ...data, userId: user?.id } as MentalRecordParam);
    };

    const handleFormSubmit = form.handleSubmit(onSubmit);

    const submitDisabled =
        !form.formState.isValid || form.formState.isSubmitting;

    return {
        form,
        handleFormSubmit,
        submitDisabled,
        selectedMood,
        handleButtonClick,
        showSelect,
        toggleSelect,
    };
};
