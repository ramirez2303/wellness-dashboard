"use client";

import React from "react";
import MentalForm from "./components/MentalForm";
import MentalContent from "./components/MentalContent";

const page = () => {

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6 relative z-1">
                <h1 className="text-2xl font-semibold">Mental Health</h1>
                <MentalForm />
            </div>
            <MentalContent />
        </div>
    );
};

export default page;
