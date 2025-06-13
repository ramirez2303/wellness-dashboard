import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { UserLogin } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/Schemas";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import useUserStore from "@/store/user/useUserStore";
import { login } from "@/services/authServices";

export const useLoginUser = () => {
    const router = useRouter();
    const { setUser } = useUserStore();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
    } = useForm<UserLogin>({
        resolver: zodResolver(LoginSchema),
        mode: "onChange",
    });

    const { mutateAsync } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            const { token, ...user } = data.data;

            setCookie("token", token);
            localStorage.setItem("token", token);

            setUser(user);

            router.push("/dashboard");
        },
        onError: (error) => {
            console.log("Login failed:", error);
        },
    });

    const onSubmit = (data: UserLogin) => {
        mutateAsync(data);
    };

    const handleFormSubmit = handleSubmit(onSubmit);

    const submitDisabled = !isValid || isSubmitting;

    return { register, handleFormSubmit, errors, submitDisabled };
};
