import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Charge les fichiers de traduction
  .use(LanguageDetector) // Détecte automatiquement la langue
  .use(initReactI18next) // Initialise la compatibilité avec React
  .init({
    fallbackLng: 'en', // Langue par défaut si aucune langue n'est détectée
    supportedLngs: ['en', 'fr'], // Langues supportées
    debug: true, // Active les logs de débogage en développement
    interpolation: {
      escapeValue: false, // Pas besoin d'échapper les chaînes en React
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Chemin vers les fichiers de traduction
    },
  });

export default i18n;
