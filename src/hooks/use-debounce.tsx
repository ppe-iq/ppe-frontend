"use client";

import { useEffect, useState } from "react";

type Props = {
  value: string;
  ms?: number;
};
export default function useDebounce({ value, ms = 200 }: Props) {
  // Debounced value state
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  // Effect for setting the new value
  useEffect(() => {
    // Set the state after a specific delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, ms);

    // Cleanup
    return () => clearTimeout(timer);
  }, [value, ms]);

  return { debouncedValue };
}
