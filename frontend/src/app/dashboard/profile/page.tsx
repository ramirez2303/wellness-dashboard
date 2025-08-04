import { Card } from "@/components/ui/card";
import React from "react";
import PersonalData from "./components/PersonalData";

const page = () => {
    return (
        <div className="grid grid-cols-4 gap-20 px-4 py-6">
            <div className="flex flex-col space-y-4 col-span-3">
                <PersonalData />

                <Card>
                    <h3 className="text-lg font-bold">Progreso</h3>
                    {/* <BarChart data={datosDeBienestar} /> */}
                </Card>

                <Card>
                    <h3 className="text-lg font-bold">Preferencias</h3>
                    {/* <Toggle label="Notificaciones" /> */}
                    {/* <SelectIdioma /> */}
                    {/* <ThemeToggle /> */}
                </Card>
            </div>
            <div className="col-span-1"></div>
        </div>
    );
};

export default page;
