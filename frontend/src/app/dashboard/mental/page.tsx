import React from "react";
import MentalForm from "./components/MentalForm";
import MentalContent from "./components/MentalContent";

const page = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Mental Health Dashboard</h1>
            <MentalContent />
            <MentalForm />
        </div>
    );
};

export default page;
