"use client";

import React from "react";
import { useGetExercises } from "../../hooks/useGetExercises";

const ExercisesTab = () => {
    const { data } = useGetExercises();
    return <div>asd</div>;
};

export default ExercisesTab;
