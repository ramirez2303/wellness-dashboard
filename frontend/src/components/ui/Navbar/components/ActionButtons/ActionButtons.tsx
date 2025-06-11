"use client";
import React, { Fragment } from "react";
import LandingPageButtons from "./components/LandingPageButtons";
import useUserStore from "@/store/user/useUserStore";
import DashboardButtons from "./components/DashboardButtons";

const ActionButtons = () => {
    const { user } = useUserStore();

    return (
        <Fragment>
            {!user?.id && <LandingPageButtons />}
            {user?.id && <DashboardButtons />}
        </Fragment>
    );
};

export default ActionButtons;
