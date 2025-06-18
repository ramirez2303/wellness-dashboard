"use client"

import React, { MouseEventHandler } from "react";

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    variant?:
        | "primary-filled"
        | "primary-outlined"
        | "accent-filled"
        | "accent-outlined"
        | "none";
    disabled?: boolean;
    icon?: React.ReactNode;
};

const Button = ({
    children,
    className,
    onClick,
    type = "button",
    variant,
    disabled,
    icon,
}: ButtonProps) => {
    const primaryFilled =
        "bg-custom-primary bg-custom-primary hover:bg-custom-primary/90";
    const primaryOutlined =
        "border border-custom-primary hover:bg-custom-primary/90";
    const accentFilled =
        "bg-custom-accent bg-custom-accent hover:bg-custom-accent/90";
    const accentOutlined =
        "border border-custom-accent hover:bg-custom-accent/90";

    const variants = {
        "primary-filled": primaryFilled,
        "primary-outlined": primaryOutlined,
        "accent-filled": accentFilled,
        "accent-outlined": accentOutlined,
        none: "",
    };
    return (
        <button
            className={`
            ${disabled ? "opacity-50 pointer-events-none select-none" : ""}
                ${
                    !variant ? variants["none"] : variants[variant]
                } ${className} duration-300 ease-in-out`}
            onClick={onClick}
            type={type}
        >
            {icon}
            {children}
        </button>
    );
};

export default Button;
