import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date formatter
export function formatDate(date: Date | string): string {
  const dateObj = new Date(date);
  const formatted = dateObj.toLocaleDateString("en-Us", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return formatted.replace(",", "");
}
