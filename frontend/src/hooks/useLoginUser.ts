import { UserLogin } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/Schemas";
import { useForm } from "react-hook-form";
import { login } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<UserLogin>({
        resolver: zodResolver(LoginSchema),
        mode: "onChange",
    });

    const { mutate } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log("Login successful:", data);
        },
        onError: (error) => {
            console.log("Login failed:", error);
        },
    });

    const onSubmit = (data: UserLogin) => {
        mutate(data);
    };

    const handleFormSubmit = handleSubmit(onSubmit);

    const submitDisabled = !isValid || isSubmitting;

    return { register, handleFormSubmit, errors, submitDisabled };
};
