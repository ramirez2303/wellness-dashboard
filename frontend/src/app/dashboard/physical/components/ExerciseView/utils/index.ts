import { DateRange } from "react-day-picker";
import { Exercise, ExercisesRecordData } from "../../../types/Physical";
import { BarChartData } from "@/types/Charts";
import { getDaysBetweenDates, getLastSevenDays } from "@/app/utils";

export const mapCaloriesBurnedToBarChartData = (
    data: ExercisesRecordData[],
    range?: DateRange
): BarChartData[] => {
    // Obtener los días relevantes según el rango o los últimos 7 días
    const days = range ? getDaysBetweenDates(range) : getLastSevenDays();

    // Inicializar un objeto para acumular las calorías por día
    const caloriesByDay: Record<string, number> = days.reduce(
        (acc, day) => ({ ...acc, [day]: 0 }),
        {}
    );

    // Iterar sobre la data y sumar las calorías por día
    data.forEach((record) => {
        const dayName = new Date(record.date).toLocaleDateString("en-US", {
            weekday: "long",
        });
        if (caloriesByDay[dayName] !== undefined) {
            caloriesByDay[dayName] += record.caloriesBurned;
        }
    });

    // Transformar el objeto acumulado en un array de BarChartData
    return days.map((day) => ({
        name: day,
        firstValue: caloriesByDay[day],
    }));
};

const valueOrders = ["second", "third", "fourth", "fifth", "sixth", "seventh"];

export const transformExercisesToStackedBarChartData = (
    data: ExercisesRecordData[],
    range?: DateRange
): BarChartData[] => {
    // Obtener los días relevantes según el rango o los últimos 7 días
    const days = range ? getDaysBetweenDates(range) : getLastSevenDays();

    // Inicializar un objeto para acumular los tiempos por día y tipo de ejercicio
    const timeByDayAndType: Record<
        string,
        Record<string, number>
    > = days.reduce((acc, day) => ({ ...acc, [day]: {} }), {});

    // Iterar sobre la data y acumular los tiempos por día y tipo de ejercicio
    data.forEach((record) => {
        const dayName = new Date(record.date).toLocaleDateString("en-US", {
            weekday: "long",
        });

        if (timeByDayAndType[dayName] !== undefined) {
            record.exercises.forEach((exercise: Exercise) => {
                if (!timeByDayAndType[dayName][exercise.type]) {
                    timeByDayAndType[dayName][exercise.type] = 0;
                }
                timeByDayAndType[dayName][exercise.type] += exercise.duration;
            });
        }
    });

    // Obtener todos los tipos de ejercicios únicos para asignar valores consistentes
    const exerciseTypes = Array.from(
        new Set(
            data.flatMap((record) =>
                record.exercises.map((exercise) => exercise.type)
            )
        )
    );

    // Transformar el objeto acumulado en un array de BarChartData
    return days.map((day) => {
        const dayData: BarChartData = { name: day, firstValue: 0 };

        exerciseTypes.forEach((type, index) => {
            const valueKey = `${
                index === 0 ? "first" : `${valueOrders[index - 1]}`
            }Value`;
            dayData[valueKey] = timeByDayAndType[day][type] || 0; // Asignar tiempo acumulado o 0 si no hay datos
        });

        return dayData;
    });
};
