import { getMentalRecord } from "@/services/mentalServices";
import useUserStore from "@/store/user/useUserStore";
import { MentalRecordResponse } from "@/types/Mental";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useMentalStore from "../store/useMentalStore";

export const useHandleMentalRecord = () => {
    const { user } = useUserStore();
    const { refetchData, toggleRefetchData } = useMentalStore();

    const { data, refetch } = useQuery<MentalRecordResponse>({
        queryKey: ["mentalRecords"],
        queryFn: () => getMentalRecord(user?.id),
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
