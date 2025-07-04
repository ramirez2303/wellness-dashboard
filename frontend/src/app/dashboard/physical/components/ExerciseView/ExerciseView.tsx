"use client";

import CaloriesChart from "./components/CaloriesChart";
import { useGetExercises } from "./hooks/useGetExercises";

const ExerciseView = () => {
    const { chartsData } = useGetExercises();
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <CaloriesChart caloriesBurnedData={chartsData?.caloriesBurned} />
        </div>
    );
};

export default ExerciseView;
