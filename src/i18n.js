import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Переводы на разных языках
const resources = {
  en: {
    translation: {
      "Category1": "Category 1",
      "Category2": "Category 2",
      // Добавьте остальные переводы здесь
    }
  },
  ru: {
    translation: {
      "Category1": "Категория 1",
      "Category2": "Категория 2",
      // Добавьте остальные переводы здесь
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // Установите язык по умолчанию
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
