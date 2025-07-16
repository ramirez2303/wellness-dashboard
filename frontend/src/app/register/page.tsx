import AuthForm from "@/components/ui/AuthForm";
import React from "react";

const page = () => {
    return (
        <div className="flex justify-center items-center h-full pt-[76px] bg-gray-100">
            <AuthForm type="register" />
        </div>
    );
};

export default page;
