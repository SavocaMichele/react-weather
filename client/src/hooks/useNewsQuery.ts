import {fetchApi} from "@/utils/helpers.ts";
import {useQuery} from "@tanstack/react-query";
import type {NewsData} from "@types";


export const useNewsQuery = (location?: string) => useQuery({
    queryKey: ["news", location],
    queryFn: (): Promise<NewsData>  => fetchApi("GET", `/news?search=${location} Weather`),
    staleTime: 60 * 60 * 1000,
    retry: false,
    enabled: !!location,
});