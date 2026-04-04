import React, { createContext, useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserQuery } from "@/hooks/useUserQuery.ts";
import { fetchApi } from "@/utils/helpers.ts";

interface AuthUser {
    id: number;
    email: string;
    username: string;
}

interface UserContextProps {
    user: AuthUser | null;
    token: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (username: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
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
    };


    const values: UserContextProps = {
        user: user ?? null,
        token,
        login,
        register,
        logout,
        isLoading: isUserLoading || loginMutation.isPending || registerMutation.isPending,
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}