import {useQuery} from "@tanstack/react-query";
import {fetchApi} from "@/utils/helpers.ts";


export const useUserQuery = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    return useQuery({
        queryKey: ["user"],
        queryFn: () => fetchApi("POST", "/auth/user"),
        staleTime: 5 * 60 * 1000,
        retry: false,
        enabled: !!token
    });
}