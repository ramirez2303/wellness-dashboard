import { getMentalRecord } from "@/services/mentalServices";
import useUserStore from "@/store/user/useUserStore";
import { useQuery } from "@tanstack/react-query";

export const useHandleMentalRecord = () => {
    const { user } = useUserStore();
    const { data } = useQuery({
        queryKey: ["mentalRecords"],
        queryFn: () => getMentalRecord(user?.id),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        retry: 1,
        enabled: !!user?.id,
        staleTime: 1000 * 60 * 5,
    });

    return { data };
};
