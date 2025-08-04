import { Card } from "@/components/ui/card";
import React from "react";
import EditPersonalData from "../EditPersonalData";

const PersonalData = () => {
    return (
        <Card className="px-6">
            <div className="flex justify-start items-start flex-col relative">
                <h3 className="text-xl font-medium">Datos Personales</h3>
                <div className="grid grid-cols-2 justify-start items-start space-y-2 space-x-12 mt-4">
                    <p className="">Nombre: {"Rodrigo Ramirez"}</p>
                    <p className="">Email: {"rodrigo@example.com"}</p>
                    <p className="">Fecha de Nacimiento: {"01/01/1990"}</p>
                    <p className="">Teléfono: {" +123456789"}</p>
                    <p className="">País: {"Argentina"}</p>
                    <p className="">Fecha de registro: {"01/01/2020"}</p>
                </div>
                <EditPersonalData />
            </div>
        </Card>
    );
};

export default PersonalData;
