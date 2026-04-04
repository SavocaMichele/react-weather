import {fetchApi} from "@/utils/helpers.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import type {WeatherData} from "@types";


export const useWeatherByCoordsQuery = (lat: number, lon: number) => useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: (): Promise<WeatherData> => fetchApi("GET", `/weather?lat=${lat}&lon=${lon}`),
    staleTime: 10 * 60 * 1000,
    retry: false,
    enabled: lat !== 0 && lon !== 0,
    placeholderData: keepPreviousData
});