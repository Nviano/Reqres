import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            /* translation file path */
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        fallbackLng: 'es',
        debug: true,
        /* can have multiple namespace, in case
        you want to divide a huge translation
        into smaller pieces */
        lng: 'es',
        ns: ['common'],
        defaultNS: 'common',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: { wait: true },
    });
export default i18n;