import { defaultLang, languages } from './ui';

export function getLangFromUrl(url: URL) {
  if (!url) {
    return defaultLang;
  }

  const [, lang] = url.pathname.split('/');

  if (lang in languages) {
    return lang as keyof typeof languages;
  }

  return defaultLang;
}
