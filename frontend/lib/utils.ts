import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toTittleCase(str: string, separator: string = ' ') {
  return str.
    split(separator).
    map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).
    join(' ');
}