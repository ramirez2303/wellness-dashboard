"use client";

import CaloriesChart from "./components/CaloriesChart";
import DurationChart from "./components/DurationChart";
import { useGetExercises } from "./hooks/useGetExercises";

const ExerciseView = () => {
    const { chartsData } = useGetExercises();
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <CaloriesChart caloriesBurnedData={chartsData?.caloriesBurned} />
            <DurationChart durationData={chartsData?.duration} />
        </div>
    );
};

export default ExerciseView;
