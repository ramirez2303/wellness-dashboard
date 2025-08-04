"use client";

import React from "react";
import { useTranslation } from "react-i18next";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    return (
        <Select
            onValueChange={(value: string) => i18n.changeLanguage(value)}
            defaultValue={i18n.language ?? "es"}
        >
            <SelectTrigger
                className="w-32 font-medium"
                style={{
                    border: "2px solid var(--color-custom-primary)",
                    maxHeight: "40px",
                }}
            >
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="es" className="font-medium">
                    Español
                </SelectItem>
                <SelectItem value="en" className="font-medium">
                    English
                </SelectItem>
            </SelectContent>
        </Select>
    );
};

export default LanguageSwitcher;
