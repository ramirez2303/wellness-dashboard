import React from "react";

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?:
        | "primary-filled"
        | "primary-outlined"
        | "secondary-filled"
        | "secondary-outlined"
        | "none";
};

const primaryFilled = "bg-primary bg-primary hover:bg-primary/90";
const primaryOutlined = "border border-primary hover:bg-primary/90";
const secondaryFilled = "bg-secondary bg-secondary hover:bg-secondary/90";
const secondaryOutlined = "border border-secondary hover:bg-secondary/90";

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
}: ButtonProps) => {
    return (
        <button
            className={`${
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
