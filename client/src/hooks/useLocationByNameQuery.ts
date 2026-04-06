import {fetchApi} from "@/utils/helpers.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import type {Location} from "@types";


export const useLocationByNameQuery = (location: string) => useQuery({
    queryKey: ["location", location],
    queryFn: (): Promise<Location[]> => fetchApi("GET", `/location?location=${location}`),
    staleTime: 10 * 60 * 1000,
    retry: false,
    enabled: !!location && location.length > 2,
    placeholderData: keepPreviousData
});