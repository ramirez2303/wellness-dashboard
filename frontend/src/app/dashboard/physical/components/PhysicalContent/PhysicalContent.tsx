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
            <div className="flex justify-between items-center mb-4">
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
