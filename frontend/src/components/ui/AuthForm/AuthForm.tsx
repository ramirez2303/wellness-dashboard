"use client";

import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Card from "@/components/common/Card";

type AuthFormProps = {
    type: "login" | "register";
};

const AuthForm = ({ type }: AuthFormProps) => {
    return (
        <Card>
            <div className="flex flex-col justify-start gap-8 py-2">
                {type === "login" && <Login />}
                {type === "register" && <Register />}
            </div>
        </Card>
    );
};

export default AuthForm;
