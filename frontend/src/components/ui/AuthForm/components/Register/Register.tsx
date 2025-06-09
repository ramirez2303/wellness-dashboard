import { routes } from "@/app/utils/routes";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Link from "next/link";
import React, { Fragment } from "react";

const Register = () => {
    return (
        <Fragment>
            <div className="flex flex-col gap-4">
                <Input label={{ text: "Username" }} required />
                <Input label={{ text: "Password" }} required />
                <Input label={{ text: "Confirm Password" }} required />
                <Input label={{ text: "Mail" }} required />
            </div>
            <Button
                variant="primary-filled"
                type="submit"
                className="text-white text-lg font-bold w-full py-2 rounded-lg mt-8 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                Register
            </Button>
            <div className="flex flex-col items-center mt-6">
                <span className="font-regular">
                    I already have an account.{" "}
                    <Link href={routes.login}>
                        <Button
                            variant="none"
                            className="text-primary hover:text-primary/80 underline cursor-pointer"
                        >
                            Log In
                        </Button>
                    </Link>
                </span>
            </div>
        </Fragment>
    );
};

export default Register;
