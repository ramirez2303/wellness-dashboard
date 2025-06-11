"use client";

import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: LucideIcon;
    size?: "sm" | "md" | "lg";
    variant?:
        | "default-primary"
        | "default-accent"
        | "outline-primary"
        | "outline-accent"
        | "ghost";
    className?: string;
}

const IconButton = ({
    icon: Icon,
    size = "md",
    variant = "default-primary",
    className,
    ...props
}: IconButtonProps) => {
    const baseStyle =
        "inline-flex items-center justify-center transition-colors";
    const sizeStyle = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
    }[size];

    const iconSize = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
    }[size];

    const variantStyle = {
        "default-primary":
            "bg-custom-primary hover:bg-custom-primary/90 text-white",
        "default-accent":
            "bg-custom-accent hover:bg-custom-accent/90 text-black",
        "outline-primary":
            "border border-custom-primary hover:bg-custom-primary text-gray-700",
        "outline-accent":
            "border border-custom-accent hover:bg-custom-accent text-black-700",
        ghost: "hover:bg-gray-100 text-gray-700",
    }[variant];

    const transitionStyle = "duration-300 ease-in-out";

    return (
        <button
            type="button"
            className={clsx(
                baseStyle,
                sizeStyle,
                variantStyle,
                transitionStyle,
                className
            )}
            {...props}
        >
            <Icon className={iconSize} />
        </button>
    );
};

export default IconButton;
