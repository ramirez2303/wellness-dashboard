import {
    HabitsChartFormatedData,
    HabitsRecordResponse,
} from "@/app/dashboard/physical/types/Physical";
import { getHabitsRecord } from "@/services/physicsServices";
import useUserStore from "@/store/user/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
    mapEnergyLevelsToBarChartData,
    mapSleepHoursToBarChartData,
    mapWaterLitersToBarChartData,
} from "../utils";
import usePhysicalStore from "../../../store/usePhysicalStore";

export const useGetHabits = () => {
    const { user } = useUserStore();
    const { refetchData, toggleRefetchData, selectedDate } = usePhysicalStore();
    const [chartsData, setChartsData] = useState<
        HabitsChartFormatedData | undefined
    >(undefined);

    const { data, refetch } = useQuery<HabitsRecordResponse>({
        queryKey: ["habitsRecords", selectedDate?.to, user?.id],
        queryFn: () =>
            getHabitsRecord(
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
        if (data && refetchData === "habits") {
            refetch();
            toggleRefetchData(null);
        }
    }, [data, refetchData, toggleRefetchData, refetch]);

    useEffect(() => {
        if (data?.data) {
            const formattedData: HabitsChartFormatedData = {
                sleepHours: mapSleepHoursToBarChartData(
                    data.data,
                    selectedDate
                ),
                waterLiters: mapWaterLitersToBarChartData(
                    data.data,
                    selectedDate
                ),
                energyLevels: mapEnergyLevelsToBarChartData(
                    data.data,
                    selectedDate
                ),
            };
            setChartsData(formattedData);
        }
    }, [data, selectedDate]);

    return { chartsData };
};
