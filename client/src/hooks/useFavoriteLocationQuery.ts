import {useQuery} from "@tanstack/react-query";
import {fetchApi} from "@/utils/helpers.ts";
import type {FavoriteLocation} from "@/context/user-context.tsx";


export const useFavoriteLocationQuery = () => {
    return useQuery({
        queryKey: ["favorites"],
        queryFn: (): Promise<FavoriteLocation[]> => fetchApi("GET", "/favorites"),
        staleTime: 5 * 60 * 1000,
        retry: false,
    });
}