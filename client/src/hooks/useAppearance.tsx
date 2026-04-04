import { useCallback, useMemo, useSyncExternalStore } from 'react';

export type ResolvedAppearance = 'light' | 'dark';
export type Appearance = ResolvedAppearance | 'system';

export type UseAppearanceReturn = {
    readonly appearance: Appearance;
    readonly resolvedAppearance: ResolvedAppearance;
    readonly updateAppearance: (mode: Appearance) => void;
};

const listeners = new Set<() => void>();
let currentAppearance: Appearance = 'system';


/** Checks if the user prefers a dark color scheme. */
const prefersDark = (): boolean => {
    if (typeof window === 'undefined') return false;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};


/** Sets a cookie with the specified name, value, and expiration in days. */
const setCookie = (name: string, value: string, days = 365): void => {
    if (typeof document === 'undefined') return;
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};


/** Retrieves the stored appearance from localStorage, defaulting to 'system' if not set. */
const getStoredAppearance = (): Appearance => {
    if (typeof window === 'undefined') return 'system';

    return (localStorage.getItem('appearance') as Appearance) || 'system';
};


/** Determines if the current appearance mode is dark based on the user's preference and system settings. */
const isDarkMode = (appearance: Appearance): boolean => {
    return appearance === 'dark' || (appearance === 'system' && prefersDark());
};


/** Applies the specified appearance mode to the document by toggling the 'dark' class and setting the color scheme. */
const applyTheme = (appearance: Appearance): void => {
    if (typeof document === 'undefined') return;

    const isDark = isDarkMode(appearance);

    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
};


/** Subscribes a callback function to be called whenever the appearance changes. Returns an unsubscribe function. */
const subscribe = (callback: () => void) => {
    listeners.add(callback);

    return () => listeners.delete(callback);
};


/** Notifies all subscribed listeners of an appearance change. */
const notify = (): void => listeners.forEach((listener) => listener());


/** Retrieves the MediaQueryList for the 'prefers-color-scheme: dark' media query, or null if not available. */
const mediaQuery = (): MediaQueryList | null => {
    if (typeof window === 'undefined') return null;

    return window.matchMedia('(prefers-color-scheme: dark)');
};


/** Handles changes to the system theme by reapplying the current appearance. */
const handleSystemThemeChange = (): void => applyTheme(currentAppearance);


/** Initializes the theme by checking localStorage for a stored appearance, applying it, and setting up a listener for system theme changes. */
export function initializeTheme(): void {
    if (typeof window === 'undefined') return;

    if (!localStorage.getItem('appearance')) {
        localStorage.setItem('appearance', 'system');
        setCookie('appearance', 'system');
    }

    currentAppearance = getStoredAppearance();
    applyTheme(currentAppearance);

    // Set up system theme change listener
    mediaQuery()?.addEventListener('change', handleSystemThemeChange);
}


/** Custom React hook to manage appearance (light/dark/system) with persistence and system preference handling. */
export function useAppearance(): UseAppearanceReturn {
    const appearance: Appearance = useSyncExternalStore(
        subscribe,
        () => currentAppearance,
        () => 'system',
    );

    const resolvedAppearance: ResolvedAppearance = useMemo(
        () => (isDarkMode(appearance) ? 'dark' : 'light'),
        [appearance],
    );

    const updateAppearance = useCallback((mode: Appearance): void => {
        currentAppearance = mode;

        // Store in localStorage for client-side persistence...
        localStorage.setItem('appearance', mode);

        // Store in cookie for SSR...
        setCookie('appearance', mode);

        applyTheme(mode);
        notify();
    }, []);

    return { appearance, resolvedAppearance, updateAppearance } as const;
}
