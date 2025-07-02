import { HabitsRecord, HabitsRecordParam } from "@/app/dashboard/physical/types/Physical";
import { habitsSchema } from "@/lib/schemas/Habits";
import { postHabitsRecord } from "@/services/physicsServices";
import useUserStore from "@/store/user/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export const useHandleHabitsRecord = () => {
    const { user } = useUserStore();
    const form = useForm<HabitsRecord>({
        resolver: zodResolver(habitsSchema),
        mode: "onChange",
        defaultValues: {
            sleepHours: 0,
            waterLiters: 0,
            energyLevel: undefined,
            note: "",
        },
    });

    const { mutateAsync } = useMutation({
        mutationFn: postHabitsRecord,
        onSuccess: () => {
            // toggleRefetchData();
            form.reset();
        },
        onError: (error) => {
            console.log("Mental Record failed:", error);
        },
    });

    const onSubmit = (data: HabitsRecord) => {
        mutateAsync({ ...data, userId: user?.id } as HabitsRecordParam);
    };

    const handleFormSubmit = form.handleSubmit(onSubmit);

    const submitDisabled =
        !form.formState.isValid || form.formState.isSubmitting;

    return { form, handleFormSubmit, submitDisabled };
};
