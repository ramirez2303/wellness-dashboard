import Card from "@/components/common/Card";
import AuthForm from "@/components/ui/AuthForm";
import React from "react";

const page = () => {
    return (
        <div className="flex justify-center items-center h-full pt-[76px] bg-gray-100">
            <Card>
                <div className="flex flex-col justify-start gap-8 py-2">
                    <div className="flex justify-center">
                        <h2 className="text-2xl font-bold">
                            Log in to your account
                        </h2>
                    </div>
                    <AuthForm type="login" />
                </div>
            </Card>
        </div>
    );
};

export default page;
