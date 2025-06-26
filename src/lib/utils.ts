import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getColorFromName(name: string) {
  const colors = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-teal-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-lime-400",
    "bg-emerald-400",
    "bg-cyan-400",
    "bg-sky-400",
    "bg-violet-400",
    "bg-fuchsia-400",
    "bg-rose-400",
    "bg-amber-400",
    "bg-green-300",
    "bg-blue-300",
    "bg-purple-300",
  ];

  let index = 0;
  if (name.length > 0) {
    let code = 0;
    for (let i = 0; i < 3 && i < name.length; i++) {
      code += name.charCodeAt(i) + name.charCodeAt(name.length - 1 - i);
    }

    index = code + name.length;
  }

  return colors[index % colors.length];
}

export function getFirstSunday(year: number, month: number): Date {
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const dayOfWeek = firstDayOfMonth.getDay(); // 0 (Sunday) to 6 (Saturday)

  let diff = 0;
  if (dayOfWeek !== 0) {
    diff = -dayOfWeek;
  }

  const firstSunday = new Date(year, month - 1, 1 + diff);
  return firstSunday;
}

export function getLastSaturday(year: number, month: number): Date {
  const lastDayOfMonth = new Date(year, month, 0);
  const dayOfWeek = lastDayOfMonth.getDay(); // 0 (Sunday) to 6 (Saturday)

  const diff = 6 - dayOfWeek;

  const lastSaturday = new Date(
    year,
    month - 1,
    lastDayOfMonth.getDate() + diff
  );
  return lastSaturday;
}

export function getFirstAndLast(
  year: number,
  month: number
): { firstSunday: Date; lastSaturday: Date } {
  const firstSunday = getFirstSunday(year, month);
  const lastSaturday = getLastSaturday(year, month);

  return { firstSunday, lastSaturday };
}

export function getSidebarStateFromCookie(): boolean {
  const cookies = document.cookie.split(";");
  const sidebarCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("sidebar_state=")
  );
  return sidebarCookie ? sidebarCookie.split("=")[1] === "true" : true;
}

/**
 * Sets a cookie with the specified name, value, and expiration days
 * @param name - Cookie name
 * @param value - Cookie value
 * @param days - Number of days until expiration (default: 30)
 */
export function setCookie(
  name: string,
  value: string,
  days: number = 30
): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

/**
 * Gets a cookie value by name
 * @param name - Cookie name
 * @returns Cookie value or null if not found
 */
export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(";");
  const cookie = cookies.find((c) => c.trim().startsWith(`${name}=`));
  return cookie ? cookie.split("=")[1] : null;
}

/**
 * Deletes a cookie by setting its expiration to the past
 * @param name - Cookie name
 */
export function deleteCookie(name: string): void {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}
