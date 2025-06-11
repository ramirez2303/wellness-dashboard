import { routes } from "@/app/utils/routes";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import Link from "next/link";
import React from "react";

const Register = () => {
    const { register, handleFormSubmit, errors, submitDisabled } =
        useRegisterUser();
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
                <Input
                    id="firstname"
                    type="text"
                    label={{ text: "Firstname" }}
                    required
                    placeholder="Enter your firstname"
                    {...register("firstname")}
                    error={errors.firstname}
                />
                <Input
                    id="lastname"
                    type="text"
                    label={{ text: "Lastname" }}
                    required
                    placeholder="Enter your lastname"
                    {...register("lastname")}
                    error={errors.lastname}
                />
            </div>
            <Button
                variant="primary-filled"
                type="submit"
                className="text-white text-lg font-bold w-full py-2 rounded-lg mt-8 cursor-pointer"
                disabled={submitDisabled}
            >
                Register
            </Button>
            <div className="flex flex-col items-center mt-6">
                <span className="font-regular">
                    I already have an account.{" "}
                    <Link href={routes.login}>
                        <Button
                            variant="none"
                            className="text-custom-primary hover:text-custom-primary/80 underline cursor-pointer"
                        >
                            Log In
                        </Button>
                    </Link>
                </span>
            </div>
        </form>
    );
};

export default Register;
