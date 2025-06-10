import { routes } from "@/app/utils/routes";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useLoginUser } from "@/hooks/useLoginUser";
import Link from "next/link";
import React from "react";

const Login = () => {
    const { register, handleFormSubmit, errors, submitDisabled } =
        useLoginUser();
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-1">
                <Input
                    id="email"
                    type="email"
                    label={{ text: "Mail" }}
                    required
                    placeholder="Enter your email"
                    {...register("email")}
                    error={errors.email}
                />
                <Input
                    id="password"
                    type="password"
                    label={{ text: "Password" }}
                    required
                    placeholder="Enter your password"
                    {...register("password")}
                    error={errors.password}
                />
            </div>

            <Button
                variant="primary-filled"
                type="submit"
                className="text-white text-lg font-bold w-full py-2 rounded-lg mt-6 cursor-pointer"
                disabled={submitDisabled}
            >
                Login
            </Button>
            <div className="flex flex-col items-center mt-8 gap-1">
                <Link href={routes.register}>
                    <Button
                        variant="none"
                        className="text-primary hover:text-primary/80 underline cursor-pointer"
                    >
                        Register a new account
                    </Button>
                </Link>
                <span className="font-regular">or</span>
                <span className="font-regular">
                    need{" "}
                    <Button
                        variant="none"
                        className="text-primary hover:text-primary/80 underline cursor-pointer"
                    >
                        recover your password
                    </Button>
                    ?
                </span>
            </div>
        </form>
    );
};

export default Login;
