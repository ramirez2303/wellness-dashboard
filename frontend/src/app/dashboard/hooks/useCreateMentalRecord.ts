import { mentalSchema } from "@/lib/Schemas";
import { postMentalRecord } from "@/services/mentalServices";
import useUserStore from "@/store/user/useUserStore";
import { MentalRecord, MentalRecordParam } from "@/types/Mental";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export const useCreateMentalRecord = () => {
    const { user } = useUserStore();
    const form = useForm<MentalRecord>({
        resolver: zodResolver(mentalSchema),
        mode: "onChange",
        defaultValues: {
            mood: undefined,
            note: undefined,
        },
    });

    const { mutateAsync } = useMutation({
        mutationFn: postMentalRecord,
        onSuccess: (data) => {
            console.log("Mental record submitted successfully:", data);
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

    return { form, handleFormSubmit, submitDisabled };
};
