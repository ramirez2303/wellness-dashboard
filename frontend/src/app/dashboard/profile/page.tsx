import React from "react";
import PersonalData from "./components/PersonalData";
import PersonalProgress from "./components/PersonalProgress";
import PersonalPreferences from "./components/PersonalPreferences";

const page = () => {
    return (
        <div className="flex flex-col px-6 pr-24 py-6 gap-4">
            <PersonalData />

            <PersonalProgress />

            <PersonalPreferences />
        </div>
    );
};

export default page;
