import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";
import resources from "./locales";

const fallbacklng = localStorage.getItem('i18nextLng') ?? 'en';
const availableLanguages = ['en', 'de', 'fr'];


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: fallbacklng,
        fallbackLng: fallbacklng,
        debug: true,
        whitelist: availableLanguages,
        detection: {
            order: ['querystring', 'cookie'],
            cache: ['cookie']
        },
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;
