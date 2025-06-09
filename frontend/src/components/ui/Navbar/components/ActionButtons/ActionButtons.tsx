import { routes } from "@/app/utils/routes";
import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const ActionButtons = () => {
    return (
        <div className="flex justify-end items-center gap-2">
            <Link href={routes.home}>
                <Button
                    variant="none"
                    className="text-lg font-medium text-black px-1 md:px-4 py-1 cursor-pointer"
                >
                    Home
                </Button>
            </Link>
            <Link href={routes.about}>
                <Button
                    variant="none"
                    className="text-lg font-medium text-black px-1 md:px-4 py-1 cursor-pointer"
                >
                    About
                </Button>
            </Link>
            <Link href={routes.login}>
                <Button
                    variant="none"
                    className="text-lg font-medium text-black px-1 md:px-4 py-1 cursor-pointer"
                >
                    Login
                </Button>
            </Link>
        </div>
    );
};

export default ActionButtons;
