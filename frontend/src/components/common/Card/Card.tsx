import React from "react";

type CardProps = {
    children?: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
    return (
        <div className="w-full bg-white rounded-2xl shadow-md p-6 max-w-sm w-full hover:shadow-lg transition-shadow duration-300">
            {children}
        </div>
    );
};

export default Card;
