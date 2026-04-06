import React, { createContext, useContext } from "react";
import type {LocationState} from "@types";

type Coords = { lat: number; lon: number; }

interface LocationContextProps {
    location: LocationState
    setSearchLocation: (coords: Coords) => void
    setCurrentLocation: (coords: Coords) => void
    clearLocation: () => void
}

/**
 * Context to provide LocationContext information throughout the app
 */
export const LocationContext = createContext<LocationContextProps | undefined>(undefined);

/**
 * Custom hook to access the LocationContext
 */
export function useLocationContext() {
    const context = useContext(LocationContext);

    if (!context) {
        throw new Error("useLocationContext must be used within a LocationContextProvider");
    }

    return context;
}

/**
 * LocationContextProvider component to wrap around parts of the app that need this context
 */
export function LocationContextProvider({ children }: { children: React.ReactNode }) {
    const [location, setLocation] = React.useState<LocationState>({
        source: null,
        coords: null
    });


    /** Set location from search input */
    const setSearchLocation = React.useCallback((coords: Coords) => {
        setLocation({ source: "search", coords });
    }, []);


    /** Set location from current geolocation */
    const setCurrentLocation = React.useCallback((coords: Coords) => {
        setLocation({ source: "current", coords });
    }, []);


    /** Clear location */
    const clearLocation = React.useCallback(() => {
        setLocation({ source: null, coords: null });
    }, []);


    const values = {
        location,
        setSearchLocation,
        setCurrentLocation,
        clearLocation
    };

    return (
        <LocationContext.Provider value={values}>
            {children}
        </LocationContext.Provider>
    );
}