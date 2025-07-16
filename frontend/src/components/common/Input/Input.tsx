import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: {
        text: string;
        className?: string;
    };
    className?: string;
    error?: string;
}

const Input = ({ label, className, error, ...rest }: InputProps) => {
    const { t } = useTranslation("common");
    return (
        <div className="flex flex-col w-full">
            {label?.text && (
                <label htmlFor={rest.id} className={label?.className + " mb-2"}>
                    {label?.text}
                </label>
            )}
            {rest.type === "textarea" ? (
                <textarea
                    data-testid="input-field"
                    className={
                        "px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 " +
                        className
                    }
                    {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    data-testid="input-field"
                    className={
                        "px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 " +
                        className
                    }
                    {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
                />
            )}
            <span
                className={`text-xs font-regular text-red-500 mt-1 ${
                    error ? "opacity-100" : "opacity-0"
                }`}
            >
                {t(error ?? "") ?? "error"}
            </span>
        </div>
    );
};

export default Input;
