import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ExerciseView from "./components/ExerciseView";
import HabitsView from "./components/HabitsView";

import PhysicalForm from "./components/PhysicalForm";
import PhysicalDatePicker from "./components/PhysicalDatePicker";

const page = () => {
    return (
        <div className="p-8">
            <div className="relative z-1">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Physical Health</h1>
                    <PhysicalForm />
                </div>
            </div>
            <Tabs defaultValue="exercises" className="relative z-0">
                <div className="flex justify-between items-center mb-4">
                    <TabsList>
                        <TabsTrigger
                            value="exercises"
                            className="text-lg cursor-pointer"
                        >
                            Exercises
                        </TabsTrigger>
                        <TabsTrigger
                            value="habits"
                            className="text-lg cursor-pointer"
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
        </div>
    );
};

export default page;
