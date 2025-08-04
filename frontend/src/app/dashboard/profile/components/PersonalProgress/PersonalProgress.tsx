import Button from "@/components/common/Button";
import { Card } from "@/components/ui/card";
import React from "react";

const PersonalProgress = () => {
    return (
        <Card className="px-6">
            <div className="flex justify-start items-start flex-col relative">
                <h3 className="text-xl font-medium">Progreso</h3>
                <div className="flex flex-col space-y-2 mt-4">
                    {/* TODO: agregar estilos copados a la info, como icono de racha, etc. */}
                    <p>5 días consecutivos usando la app</p>
                    <p>Última actividad completada: Meditación - 10 min</p>
                    <p>Nivel de bienestar estimado: 80%</p>
                    <p>Logros desbloqueados: 3</p>
                    <p>Próximo logro: Completar 7 días consecutivos</p>
                    <p>Hábitos seguidos recientemente</p>
                    <ul className="list-disc pl-5">
                        <li>Meditar 10 minutos diarios</li>
                        <li>Leer un libro por mes</li>
                        <li>Hacer ejercicio 3 veces por semana</li>
                    </ul>
                </div>
                <Button
                    variant="primary-outlined"
                    className="top-0 right-0 absolute p-2 rounded-lg border-2 cursor-pointer hover:text-white"
                >
                    Ver Detalles del Progreso
                </Button>
            </div>
        </Card>
    );
};

export default PersonalProgress;
