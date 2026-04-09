const API_URL = import.meta.env.VITE_API_URL;

/**
 * Transforms a date into a human-readable format.
 *
 * @param date
 * @author Michele Savoca
 */
export const transformDate = (date: Date | number | string, returnNow: boolean = false): string => {
    if (typeof date === "number") {
        date = new Date(date * 1000);
    }

    if (typeof date === "string") {
        date = new Date(date);
    }

    if (returnNow) {
        const now = new Date();

        if (
            date.getDate() === now.getDate()
            && date.getMonth() === now.getMonth()
            && date.getFullYear() === now.getFullYear()
        ) {
            return "Today";
        }
    }

    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "short",
    };

    return date.toLocaleString("en-US", options);
}


export const getShortDate = (date: Date | number, returnNow: boolean = false): string => {
    if (typeof date === "number") {
        date = new Date(date * 1000);
    }

    if (returnNow) {
        const now = new Date();

        if (
            date.getDate() === now.getDate()
            && date.getMonth() === now.getMonth()
            && date.getFullYear() === now.getFullYear()
        ) {
            return "Today";
        }
    }

    const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
    };

    return date.toLocaleString("en-US", options);
}


export const transformTime = (date: Date | number, returnNow: boolean = false): string => {
    const now = new Date();

    if (typeof date === "number") {
        date = new Date(date * 1000);
    }

    // Everything within the current hour is considered "Now"; Example: 10 - 10:59 is "Now"
    if (returnNow && (date.getHours() === now.getHours() && date.getDate() === now.getDate())) {
        return "Now";
    }

    const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
    };

    return date.toLocaleString("en-US", options);
}


export const fetchApi = async (method: "GET" | "POST" | "DELETE", path: string, payload?: any) => {
    let token = localStorage.getItem("token");

    /** Sanitize path */
    if (path.startsWith("/")) {
        path = path.slice(1);
    }

    const response = await fetch(`${API_URL}/${path}`, {
        method: method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },

        body: payload !== undefined ? JSON.stringify(payload) : undefined,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        const message = data?.message || `Request failed with status ${response.status}`;
        const error: any = new Error(message);

        error.status = response.status;
        error.data = data;

        throw error;
    }

    return data;
}