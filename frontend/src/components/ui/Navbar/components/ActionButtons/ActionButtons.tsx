import Button from "@/components/common/Button";
import React from "react";

const ActionButtons = () => {
    return (
        <div className="flex justify-end items-center gap-2">
            <Button
                variant="none"
                className="text-lg font-medium text-black px-4 py-1 cursor-pointer"
            >
                Home
            </Button>
            <Button
                variant="none"
                className="text-lg font-medium text-black px-4 py-1 cursor-pointer"
            >
                About
            </Button>
            <Button
                variant="none"
                className="text-lg font-medium text-black px-4 py-1 cursor-pointer"
            >
                Login
            </Button>
        </div>
    );
};

export default ActionButtons;
