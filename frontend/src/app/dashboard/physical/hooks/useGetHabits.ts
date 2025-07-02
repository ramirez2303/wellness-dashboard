import {
    HabitsChartFormatedData,
    HabitsRecordResponse,
} from "@/app/dashboard/physical/types/Physical";
import { getHabitsRecord } from "@/services/physicsServices";
import useUserStore from "@/store/user/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import usePhysicalStore from "../store/usePhysicalStore";
import {
    mapEnergyLevelsToBarChartData,
    mapSleepHoursToBarChartData,
    mapWaterLitersToBarChartData,
} from "../components/HabitsView/utils/utils";

export const useGetHabits = () => {
    const { user } = useUserStore();
    const { refetchData, toggleRefetchData, selectedDate } = usePhysicalStore();
    const [chartsData, setChartsData] = useState<
        HabitsChartFormatedData | undefined
    >(undefined);

    const { data, refetch } = useQuery<HabitsRecordResponse>({
        queryKey: [
            "habitsRecords",
            selectedDate?.from,
            selectedDate?.to,
            user?.id,
        ],
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
        if (refetchData) {
            refetch();
            toggleRefetchData();
        }
    }, [refetchData, toggleRefetchData, refetch]);

    useEffect(() => {
        if (data?.data) {
            const formattedData: HabitsChartFormatedData = {
                sleepHours: mapSleepHoursToBarChartData(data.data),
                waterLiters: mapWaterLitersToBarChartData(data.data),
                energyLevels: mapEnergyLevelsToBarChartData(data.data),
            };
            setChartsData(formattedData);
        }
    }, [data]);

    return { chartsData };
};
