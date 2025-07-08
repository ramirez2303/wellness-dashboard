import React from "react";

import PhysicalForm from "./components/PhysicalForm";
import PhysicalContent from "./components/PhysicalContent";

const page = () => {
    return (
        <div className="p-8">
            <div className="relative z-1">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Physical Health</h1>
                    <PhysicalForm />
                </div>
            </div>
            <PhysicalContent />
        </div>
    );
};

export default page;
