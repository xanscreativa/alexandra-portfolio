import type { Locale } from "@/data/translations";

type DatePoint = {
  year: number;
  month?: number;
};

const getMonthNames = (locale: string) =>
  Array.from({ length: 12 }, (_, index) =>
    new Intl.DateTimeFormat(locale, {
      month: "long",
      timeZone: "UTC",
    })
      .format(new Date(Date.UTC(2020, index, 1)))
      .toLocaleLowerCase(locale)
  );

const monthNumbers = new Map<string, number>();

for (const locale of ["en-US", "id-ID"]) {
  getMonthNames(locale).forEach((name, index) => {
    monthNumbers.set(name, index + 1);
  });
}

function parseDatePoint(value: string): DatePoint | null {
  const match = value.trim().match(/^([\p{L}.]+)\s+(\d{4})$|^(\d{4})$/u);

  if (!match) {
    return null;
  }

  const year = Number(match[2] ?? match[3]);
  const monthName = match[1]?.toLocaleLowerCase();

  if (!monthName) {
    return { year };
  }

  const month = monthNumbers.get(monthName);
  return month ? { year, month } : null;
}

function formatMonth(month: number, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    month: "long",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(2020, month - 1, 1)));
}

export function formatResumePeriod(
  value: string,
  locale: Locale,
  now = new Date()
): string {
  const parts = value.split(/\s+[–—-]\s+/);

  if (parts.length !== 2) {
    return value;
  }

  const [startValue, endValue] = parts;
  const start = parseDatePoint(startValue);

  if (!start) {
    return value;
  }

  const normalizedEnd = endValue.toLocaleLowerCase();
  const isPresent = normalizedEnd === "present" || normalizedEnd === "sekarang";

  if (isPresent) {
    if (start.year === now.getFullYear() && start.month) {
      return `${formatMonth(start.month, locale)} – ${formatMonth(now.getMonth() + 1, locale)} ${start.year}`;
    }

    return `${start.year} – ${locale === "en" ? "Present" : "Sekarang"}`;
  }

  const end = parseDatePoint(endValue);

  if (!end) {
    return value;
  }

  if (start.year !== end.year) {
    return `${start.year} – ${end.year}`;
  }

  if (start.month && end.month) {
    return `${formatMonth(start.month, locale)} – ${formatMonth(end.month, locale)} ${start.year}`;
  }

  return value;
}
