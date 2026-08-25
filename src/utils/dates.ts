const SHORT_MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export function getYearsSince(startYear: number): number {
  return new Date().getFullYear() - startYear;
}

export function formatYearRange(startYear: number, endYear: number | null): string {
  return `${startYear} - ${endYear ?? 'Present'}`;
}

export function formatMonthYear(month: number, year: number): string {
  return `${SHORT_MONTHS[month - 1]} ${year}`;
}

export function formatMonthYearRange(
  startMonth: number,
  startYear: number,
  endMonth: number | null,
  endYear: number | null
): string {
  const start = formatMonthYear(startMonth, startYear);
  const end = endYear === null ? 'Present' : formatMonthYear(endMonth as number, endYear);
  return `${start} - ${end}`;
}

export function formatFullDate(date: Date): string {
  return date.toLocaleDateString('en-UK', { month: 'long', day: 'numeric', year: 'numeric' });
}
