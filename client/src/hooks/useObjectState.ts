import React from "react";


/**
 * A custom hook for managing state of an object.
 * It provides a way to update individual fields of
 * the object without having to update the entire object.
 *
 * @param initialState
 * @author Michele Savoca
 */
export function useObjectState<T extends object>(initialState: T) {
    const [state, setState] = React.useState<T>(initialState);

    const setField = React.useCallback(
        <K extends keyof T>(key: K, value: T[K]) => {
            setState(prev => ({
                ...prev,
                [key]: value
            }));
        },
        []
    );


    const setFields = React.useCallback((values: Partial<T>) => {
        setState(prev => ({
            ...prev,
            ...values
        }));
    }, []);

    return {
        state,
        setState,
        setField,
        setFields
    };
}
