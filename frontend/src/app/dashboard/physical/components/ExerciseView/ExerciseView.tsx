"use client";

import CaloriesChart from "./components/CaloriesChart";
import DurationChart from "./components/DurationChart";
import ExercisesTable from "./components/ExercisesTable";
import TypeChart from "./components/TypeChart";
import { useGetExercises } from "./hooks/useGetExercises";

const ExerciseView = () => {
    const { data, chartsData } = useGetExercises();
    return (
        <div className="grid grid-cols-6 max-[1200px]:grid-cols-3 max-[768px]:pb-16 grid-rows-2 gap-y-8 md:gap-4">
            <CaloriesChart caloriesBurnedData={chartsData?.caloriesBurned} />
            <DurationChart durationData={chartsData?.duration} />
            <TypeChart typeData={chartsData?.type} />
            <ExercisesTable data={data} />
        </div>
    );
};

export default ExerciseView;
