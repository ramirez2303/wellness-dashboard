import { routes } from "@/app/utils/routes";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Link from "next/link";
import React, { Fragment } from "react";

const Login = () => {
    return (
        <Fragment>
            <div className="flex flex-col gap-6">
                <Input label={{ text: "Mail" }} required />
                <Input label={{ text: "Password" }} required />
            </div>

            <Button
                variant="primary-filled"
                type="submit"
                className="text-white text-lg font-bold w-full py-2 rounded-lg mt-10 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                Login
            </Button>
            <div className="flex flex-col items-center mt-8 gap-2">
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
        </Fragment>
    );
};

export default Login;
