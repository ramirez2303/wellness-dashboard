import { ExercisesRecordResponse } from "@/app/dashboard/physical/types/Physical";
import { getExercisesRecord } from "@/services/physicsServices";
import useUserStore from "@/store/user/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import usePhysicalStore from "../store/usePhysicalStore";

export const useGetExercises = () => {
    const { user } = useUserStore();
    const { refetchData, toggleRefetchData } = usePhysicalStore();

    const { data, refetch } = useQuery<ExercisesRecordResponse>({
        queryKey: ["exercisesRecords"],
        queryFn: () => getExercisesRecord(user?.id),
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
