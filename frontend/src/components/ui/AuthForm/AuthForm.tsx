"use client";
import React, { Fragment } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

type AuthFormProps = {
    type: "login" | "register";
};

const AuthForm = ({ type }: AuthFormProps) => {
    return (
        <Fragment>
            {type === "login" && <Login />}
            {type === "register" && <Register />}
        </Fragment>
    );
};

export default AuthForm;
