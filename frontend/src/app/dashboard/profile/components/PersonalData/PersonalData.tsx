import Button from "@/components/common/Button";
import { Card } from "@/components/ui/card";
import React from "react";

const PersonalData = () => {
    return (
        <Card className="px-6">
            <div className="flex justify-start items-start flex-col relative">
                <h2 className="text-xl font-medium">Datos Personales</h2>
                <div className="grid grid-cols-2 justify-start items-start space-y-2 space-x-12 mt-4">
                    <p className="">Nombre: {"Rodrigo Ramirez"}</p>
                    <p className="">Email: {"rodrigo@example.com"}</p>
                    <p className="">Fecha de Nacimiento: {"01/01/1990"}</p>
                    <p className="">Teléfono: {" +123456789"}</p>
                    <p className="">País: {"Argentina"}</p>
                    <p className="">Fecha de registro: {"01/01/2020"}</p>
                </div>
                <Button
                    variant="primary-outlined"
                    className="top-0 right-0 absolute p-2 rounded-lg border-2 cursor-pointer hover:text-white"
                >
                    Editar Perfil
                </Button>
            </div>
        </Card>
    );
};

export default PersonalData;
