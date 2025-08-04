import { Card } from "@/components/ui/card";
import React from "react";

const PersonalPreferences = () => {
    return (
        <Card className="px-6">
            <h3 className="text-xl font-medium">Preferencias</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <p>Idioma: Español</p>
                <p>Tema: Claro</p>
                <p>Notificaciones: Activadas</p>
                <p>Privacidad: Alta</p>
                <p>Modo oscuro: Desactivado</p>
                <p>Frecuencia de recordatorios: Diaria</p>
            </div>
        </Card>
    );
};

export default PersonalPreferences;
