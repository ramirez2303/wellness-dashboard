"use client";

import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhysicalDatePicker from "../PhysicalDatePicker";
import ExerciseView from "../ExerciseView";
import HabitsView from "../HabitsView";
import usePhysicalStore from "../../store/usePhysicalStore";

const PhysicalContent = () => {
    const { tabSelected, setTabSelected } = usePhysicalStore();
    return (
        <Tabs defaultValue={tabSelected} className="relative z-0">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-start items-start md:justify-between md:items-center mb-4">
                <TabsList>
                    <TabsTrigger
                        value="exercises"
                        className="text-lg cursor-pointer"
                        onClick={() => setTabSelected("exercises")}
                    >
                        Exercises
                    </TabsTrigger>
                    <TabsTrigger
                        value="habits"
                        className="text-lg cursor-pointer"
                        onClick={() => setTabSelected("habits")}
                    >
                        Habits
                    </TabsTrigger>
                </TabsList>
                <PhysicalDatePicker />
            </div>
            <TabsContent value="exercises">
                <ExerciseView />
            </TabsContent>
            <TabsContent value="habits">
                <HabitsView />
            </TabsContent>
        </Tabs>
    );
};

export default PhysicalContent;
