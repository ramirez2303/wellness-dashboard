import React from "react";
import PhysicalTab from "./components/ExercisesTab";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HabitsTab from "./components/HabitsTab";
import PhysicalForm from "./components/PhysicalForm";

const page = () => {
    return (
        <div className="p-8">
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold">Physical Health</h1>
                    <PhysicalForm />
                </div>
            </div>
            <Tabs defaultValue="exercises" className="w-[400px]">
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
                <TabsContent value="exercises">
                    <PhysicalTab />
                </TabsContent>
                <TabsContent value="habits">
                    <HabitsTab />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default page;
