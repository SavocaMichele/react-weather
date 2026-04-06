import { useEffect, useState } from "react";

/**
 * Debounce hook that delays the update of a value until
 * after a specified delay has passed since the last change.
 * @param value
 * @param delay
 */
export function useDebounce<T>(value: T, delay: number = 400): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

