"use client"

import Button from "@/components/common/Button";
import React from "react";
import { useTranslation } from "react-i18next";

const LandingPageContent = () => {
    const { t } = useTranslation("common");
    return (
        <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-4xl font-bold">{t("landing_title")}</h1>
            <h3 className="text-xl font-medium">{t("landing_subtitle")}</h3>
            <Button
                variant="primary-filled"
                className="text-lg font-semibold text-white px-4 py-2 rounded-xl cursor-pointer"
            >
                {t("get_started")}
            </Button>
        </div>
    );
};

export default LandingPageContent;
