import Button from "@/components/common/Button";
import React from "react";

const ActionButtons = () => {
    return (
        <div className="flex justify-end items-center gap-4">
            <Button
                variant="primary-filled"
                className="text-lg font-medium text-white px-6 py-1 rounded-md cursor-pointer"
            >
                Login
            </Button>
            <Button
                variant="primary-filled"
                className="text-lg font-medium text-white px-6 py-1 rounded-md cursor-pointer"
            >
                Register
            </Button>
        </div>
    );
};

export default ActionButtons;
