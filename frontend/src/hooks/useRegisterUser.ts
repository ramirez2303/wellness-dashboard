import { UserRegister } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/lib/Schemas";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { register as registerFn } from "@/services/authServices";

export const useRegisterUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<UserRegister>({
        resolver: zodResolver(RegisterSchema),
        mode: "onChange",
    });

    const { mutateAsync } = useMutation({
        mutationFn: registerFn,
        onSuccess: (data) => {
            console.log("Login successful:", data);
        },
        onError: (error) => {
            console.log("Login failed:", error);
        },
    });

    const onSubmit = (data: UserRegister) => {
        mutateAsync(data);
    };

    const handleFormSubmit = handleSubmit(onSubmit);

    const submitDisabled = !isValid || isSubmitting;

    return { register, handleFormSubmit, errors, submitDisabled };
};
