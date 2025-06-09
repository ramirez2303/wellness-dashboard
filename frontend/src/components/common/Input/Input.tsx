import React from "react";

type InputProps = {
    type?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    label?: {
        text: string;
        className?: string;
    };
    required?: boolean;
    disabled?: boolean;
    minLength?: number;
    maxLength?: number;
};

const Input = ({
    type = "text",
    id,
    name,
    placeholder,
    className = "",
    onChange,
    value,
    label,
    required = false,
    disabled = false,
    minLength,
    maxLength,
}: InputProps) => {
    return (
        <div className="flex flex-col gap-2 w-full max-w-sm">
            {label?.text && (
                <label htmlFor="email" className={label?.className}>
                    {label?.text}
                </label>
            )}
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={
                    "px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 " +
                    className
                }
                required={required}
                disabled={disabled}
                minLength={minLength}
                maxLength={maxLength}
                data-testid="input-field"
            />
        </div>
    );
};

export default Input;
