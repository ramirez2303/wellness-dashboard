import React, { MouseEventHandler } from "react";

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    variant?:
        | "primary-filled"
        | "primary-outlined"
        | "secondary-filled"
        | "secondary-outlined"
        | "none";
    disabled?: boolean;
};

const primaryFilled = "bg-primary bg-primary hover:bg-primary/90";
const primaryOutlined = "border border-primary hover:bg-primary/90";
const secondaryFilled = "bg-accent bg-accent hover:bg-accent/90";
const secondaryOutlined = "border border-accent hover:bg-accent/90";

const variants = {
    "primary-filled": primaryFilled,
    "primary-outlined": primaryOutlined,
    "secondary-filled": secondaryFilled,
    "secondary-outlined": secondaryOutlined,
    none: "",
};

const Button = ({
    children,
    className,
    onClick,
    type = "button",
    variant,
    disabled,
}: ButtonProps) => {
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
            {children}
        </button>
    );
};

export default Button;
