"use client";
import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

type AuthFormProps = {
    type: "login" | "register";
};

const AuthForm = ({ type }: AuthFormProps) => {
    return (
        <form>
            {type === "login" && <Login />}
            {type === "register" && <Register />}
        </form>
    );
};

export default AuthForm;
