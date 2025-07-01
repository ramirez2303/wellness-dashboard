import useUserStore from "@/store/user/useUserStore";
import { useQuery } from "@tanstack/react-query";
import usePhysicalStore from "../store/usePhysicalStore";
import { HabitsRecordResponse } from "@/types/Physical";
import { getHabitsRecord } from "@/services/physicsServices";
import { useEffect } from "react";

export const useGetHabits = () => {
    const { user } = useUserStore();
    const { refetchData, toggleRefetchData } = usePhysicalStore();

    const { data, refetch } = useQuery<HabitsRecordResponse>({
        queryKey: ["habitsRecords"],
        queryFn: () => getHabitsRecord(user?.id),
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

    return { data: data?.data };
};
