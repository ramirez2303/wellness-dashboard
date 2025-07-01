"use client";

import React from "react";
import { useGetHabits } from "../../hooks/useGetHabits";

const HabitsTab = () => {
    const { data } = useGetHabits();
    return <div>HabitsTab</div>;
};

export default HabitsTab;
