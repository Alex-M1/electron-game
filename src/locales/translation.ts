import ru from './ru.json';
import ua from './ua.json';

type Keys = keyof typeof ru

export const translation = (key: Keys) => {
  const lang = localStorage.getItem('lang') || ru;
  if (lang === 'ua') return ua[key] || key;
  return ru[key] || key;
};

export const setLang = (lang: string) => localStorage.setItem('lang', lang);
