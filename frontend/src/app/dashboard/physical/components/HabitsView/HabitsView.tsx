"use client";

import EnergyChart from "./components/EnergyChart";
import SleepChart from "./components/SleepChart";
import WaterChart from "./components/WaterChart";
import { useGetHabits } from "./hooks/useGetHabits";

const HabitsView = () => {
    const { chartsData } = useGetHabits();
    return (
        <div className="w-full grid grid-cols-6 gap-4">
            <div className="w-full flex flex-col gap-4 col-span-2">
                <SleepChart sleepHoursData={chartsData?.sleepHours} />
                <WaterChart waterLitersData={chartsData?.waterLiters} />
            </div>
            <div className="w-full h-full flex flex-col gap-4 col-span-4">
                <EnergyChart energyLevelData={chartsData?.energyLevels} />
            </div>
        </div>
    );
};

export default HabitsView;
