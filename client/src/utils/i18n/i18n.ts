import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import en from './locales/en/translation.json';
import de from './locales/de/translation.json';

// Key used to persist the selected language in localStorage
const LANGUAGE_STORAGE_KEY = 'language';

/**
 * Reads the preferred language from localStorage.
 * Falls back to 'en' if nothing is stored or an unsupported value is found.
 */
const getStoredLanguage = (): 'en' | 'de' => {
    if (typeof window === 'undefined') return 'en';

    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (stored === 'de' || stored === 'en') {
        return stored;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'en');
    return 'en';
};

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
    .use(Backend)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: getStoredLanguage(),
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: en,
            },
            de: {
                translation: de,
            }
        }
    });


export default i18n;
