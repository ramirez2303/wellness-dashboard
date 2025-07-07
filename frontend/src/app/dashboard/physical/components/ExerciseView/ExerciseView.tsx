"use client";

import CaloriesChart from "./components/CaloriesChart";
import DurationChart from "./components/DurationChart";
import ExercisesTable from "./components/ExercisesTable";
import TypeChart from "./components/TypeChart";
import { useGetExercises } from "./hooks/useGetExercises";

const ExerciseView = () => {
    const { data, chartsData } = useGetExercises();
    return (
        <div className="grid grid-cols-6 grid-rows-2 gap-4">
            <CaloriesChart caloriesBurnedData={chartsData?.caloriesBurned} />
            <DurationChart durationData={chartsData?.duration} />
            <TypeChart typeData={chartsData?.type} />
            <ExercisesTable data={data} />
        </div>
    );
};

export default ExerciseView;
