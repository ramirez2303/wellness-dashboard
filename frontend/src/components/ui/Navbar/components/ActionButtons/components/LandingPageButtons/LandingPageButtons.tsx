"use client"

import { routes } from "@/app/utils/routes";
import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const LandingPageButtons = () => {
    const { t } = useTranslation("common");
    return (
        <div className="flex justify-end items-center gap-2">
            <Link href={routes.home}>
                <Button
                    variant="none"
                    className="text-lg font-medium text-black px-1 md:px-4 py-1 cursor-pointer"
                >
                    {t("home")}
                </Button>
            </Link>
            <Link href={routes.about}>
                <Button
                    variant="none"
                    className="text-lg font-medium text-black px-1 md:px-4 py-1 cursor-pointer"
                >
                    {t("about")}
                </Button>
            </Link>
            <Link href={routes.login}>
                <Button
                    variant="none"
                    className="text-lg font-medium text-black px-1 md:px-4 py-1 cursor-pointer"
                >
                    {t("login")}
                </Button>
            </Link>
            <Link href={routes.register}>
                <Button
                    variant="none"
                    className="text-lg font-medium text-black px-1 md:px-4 py-1 cursor-pointer"
                >
                    {t("register")}
                </Button>
            </Link>
        </div>
    );
};

export default LandingPageButtons;
