import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export const formatAddressSlug = (
  chunks: Array<string | number | undefined>,
): string =>
  chunks
    .filter(Boolean)
    .map((chunk) => String(chunk).trim())
    .filter((chunk) => chunk.length > 0)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
