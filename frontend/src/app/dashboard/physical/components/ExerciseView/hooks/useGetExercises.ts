import {
    ExercisesChartFormatedData,
    ExercisesRecordResponse,
} from "@/app/dashboard/physical/types/Physical";
import { getExercisesRecord } from "@/services/physicsServices";
import useUserStore from "@/store/user/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import usePhysicalStore from "../../../store/usePhysicalStore";
import {
    mapCaloriesBurnedToBarChartData,
    mapExercisesTypeToPieChartData,
    transformExercisesToStackedBarChartData,
} from "../utils";

export const useGetExercises = () => {
    const { user } = useUserStore();
    const { refetchData, toggleRefetchData, selectedDate } = usePhysicalStore();
    const [chartsData, setChartsData] = useState<
        ExercisesChartFormatedData | undefined
    >(undefined);

    const { data, refetch } = useQuery<ExercisesRecordResponse>({
        queryKey: [
            "exercisesRecords",
            selectedDate?.from,
            selectedDate?.to,
            user?.id,
        ],
        queryFn: () =>
            getExercisesRecord(
                user?.id,
                selectedDate?.from?.toISOString(),
                selectedDate?.to?.toISOString()
            ),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        retry: 1,
        enabled: !!user?.id,
        staleTime: 1000 * 60 * 5,
    });

    useEffect(() => {
        if (data && refetchData === "exercises") {
            refetch();
            toggleRefetchData(null);
        }
    }, [data, refetchData, toggleRefetchData, refetch]);

    useEffect(() => {
        if (data?.data) {
            const formattedData: ExercisesChartFormatedData = {
                caloriesBurned: mapCaloriesBurnedToBarChartData(data.data),
                duration: transformExercisesToStackedBarChartData(data.data),
                type: mapExercisesTypeToPieChartData(data.data),
            };
            setChartsData(formattedData);
        }
    }, [data, selectedDate]);

    return {
        data: data?.data,
        chartsData,
    };
};
