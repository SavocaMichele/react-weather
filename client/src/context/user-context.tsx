import React, { createContext, useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserQuery } from "@/hooks/useUserQuery.ts";
import { fetchApi } from "@/utils/helpers.ts";
import {useFavoriteLocationQuery} from "@/hooks/useFavoriteLocationQuery.ts";

interface AuthUser {
    id: number;
    email: string;
    username: string;
}

export interface FavoriteLocation {
    id: number;
    lat: number;
    lon: number;
    createdAt: string;
    updatedAt: string;
}

interface UserContextProps {
    user: AuthUser | null;
    token: string | null;
    favorites: FavoriteLocation[];
    login: (email: string, password: string) => Promise<void>;
    register: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    addFavorite: (lat: number, lon: number) => Promise<void>;
    removeFavorite: (id: number) => Promise<void>;
    isLoading: boolean;
    isFavoritesLoading: boolean;
}

/**
 * Context to provide UserContext information throughout the app
 */
export const UserContext = createContext<UserContextProps | undefined>(undefined);

/**
 * Custom hook to access the UserContext
 */
export function useUserContext() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUserContext must be used within a UserContextProvider");
    }

    return context;
}

/**
 * UserContextProvider component to wrap around parts of the app that need this context
 */
export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const queryClient = useQueryClient();

    /** State to hold the authentication token, initialized from localStorage */
    const [token, setToken] = React.useState<string | null>(() => {
        return localStorage.getItem("token");
    });


    /** Fetch the current user data using the token, if available */
    const { data: user, isLoading: isUserLoading } = useUserQuery();


    /** Fetch the current user's favorites when authenticated */
    const { data: favorites = [], isLoading: isFavoritesLoading } = useFavoriteLocationQuery();


    /** Persist token and update token state */
    const applyToken = (newToken: string | null) => {
        if (newToken) {
            localStorage.setItem("token", newToken);
            setToken(newToken);
        } else {
            localStorage.removeItem("token");
            setToken(null);
        }
    };


    /** Login method to authenticate the user and store the token, then fetch user data */
    const loginMutation = useMutation({
        mutationFn: async ({ email, password }: { email: string; password: string }) => {
            return await fetchApi("POST", "/auth/login", {email, password}) as Promise<{ token: string }>;
        },
        onSuccess: async (data) => {
            if (data?.token) {
                applyToken(data.token);
                await queryClient.invalidateQueries({ queryKey: ["user"] });
            }
        },
        onError: () => {
            applyToken(null);
        },
    });


    /** Method to trigger the login mutation */
    const login = async (email: string, password: string) => {
        await loginMutation.mutateAsync({ email, password });
    };


    /** Registration method to create a new user, then log them in */
    const registerMutation = useMutation({
        mutationFn: async ({ username, email, password }: { username: string; email: string; password: string }) => {
            return await fetchApi("POST", "/auth/register", { username, email, password });
        },
        onSuccess: async (_data, variables) => {
            await loginMutation.mutateAsync({ email: variables.email, password: variables.password });
        },
    });


    /** Method to trigger the registration mutation */
    const register = async (username: string, email: string, password: string) => {
        await registerMutation.mutateAsync({ username, email, password });
    };


    /** Logout function to clear the token and user information */
    const logout = () => {
        applyToken(null);
        queryClient.setQueryData(["user"], null);
        queryClient.setQueryData(["favorites"], []);
    };


    /** Add a favorite location for the current user */
    const addFavoriteMutation = useMutation({
        mutationFn: async ({ lat, lon }: { lat: number; lon: number }) => {
            return await fetchApi("POST", "/favorites", { lat, lon }) as Promise<FavoriteLocation>;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["favorites"] });
        },
    });


    /** Remove a favorite location by id */
    const removeFavoriteMutation = useMutation({
        mutationFn: async (id: number) => {
            await fetchApi("DELETE", `/favorites/${id}`);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["favorites"] });
        },
    });


    const addFavorite = async (lat: number, lon: number) => {
        await addFavoriteMutation.mutateAsync({ lat, lon });
    };

    const removeFavorite = async (id: number) => {
        await removeFavoriteMutation.mutateAsync(id);
    };


    const values: UserContextProps = {
        user: user ?? null,
        token,
        favorites,
        login,
        register,
        logout,
        addFavorite,
        removeFavorite,
        isLoading:
            isUserLoading ||
            loginMutation.isPending ||
            registerMutation.isPending,
        isFavoritesLoading:
            isFavoritesLoading ||
            addFavoriteMutation.isPending ||
            removeFavoriteMutation.isPending
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}