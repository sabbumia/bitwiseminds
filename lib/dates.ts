// Shared date helpers so no page ever shows a stale hardcoded date.
// Server components evaluate these at build/render time; client components
// ("use client") evaluate them in the visitor's browser.

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Today's date as YYYY-MM-DD in local time (for <input type="date">). */
export function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** A date `n` days before today, formatted like "24 Jun, 2025" (the blog style). */
export function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS[d.getMonth()]}, ${d.getFullYear()}`;
}

/** Current four-digit year (copyright lines, "in {year}" titles). */
export function currentYear(): number {
  return new Date().getFullYear();
}
