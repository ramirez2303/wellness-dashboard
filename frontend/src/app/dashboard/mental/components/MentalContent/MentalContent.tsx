"use client";
import { useHandleMentalRecord } from "@/app/dashboard/hooks/useHandleMentalRecord";
import React from "react";

const MentalContent = () => {
    const { data: mentalRecords } = useHandleMentalRecord();
    console.log(mentalRecords);
    return <div />;
};

export default MentalContent;
