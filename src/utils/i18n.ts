import en from '@lang/en';

const dictionaries = { en };

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];

export const defaultLocale: Locale = 'en';

export function getStrings(locale?: string) {
  return dictionaries[locale as Locale] ?? dictionaries.en;
}
