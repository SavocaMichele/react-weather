import React from "react";
import {useWeatherByCoordsQuery} from "@/hooks/useWeatherByCoordsQuery.ts";
import { useLocationContext } from "@/context/location-context";

const DEFAULT_COORDS = { lat: 40.7128, lon: -74.0060 } as const;

export const useCurrentLocationWeather = () => {
    const [coords, setCoords]                           = React.useState<{ lat: number; lon: number }>(DEFAULT_COORDS);
    const [hasCurrentLocation, setHasCurrentLocation]   = React.useState<boolean>(false);
    const [isLocating, setIsLocating]                   = React.useState<boolean>(false);
    const [locationError, setLocationError]             = React.useState<string | null>(null);

    const { setCurrentLocation } = useLocationContext();

    const getCurrentLocation = React.useCallback(() => {
        if (!navigator.geolocation) {
            console.error("Geolocation is not supported by this browser.");

            setLocationError("Geolocation is not supported by this browser.");
            setHasCurrentLocation(false);

            return;
        }

        setIsLocating(true);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const nextCoords = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                } as const;

                setCoords(nextCoords);
                setHasCurrentLocation(true);
                setLocationError(null);
                setIsLocating(false);

                setCurrentLocation(nextCoords);
            },
            (error) => {
                console.error("Error getting location:", error);

                setHasCurrentLocation(false);
                setLocationError(error.message);
                setIsLocating(false);
            },
            {
                enableHighAccuracy: false,
                timeout: 20000,
            }
        );
    }, [setCurrentLocation]);


    React.useEffect(() => {
        getCurrentLocation();
    }, [getCurrentLocation]);


    const query = useWeatherByCoordsQuery(coords.lat, coords.lon);


    return {
        coords,
        hasCurrentLocation,
        isLocating,
        locationError,
        weather: query.data,
        isWeatherLoading: query.isLoading,
        refreshCurrentLocation: getCurrentLocation,
        ...query,
    } as const;
};
