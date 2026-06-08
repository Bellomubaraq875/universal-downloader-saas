import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Placeholder dictionaries - will be expanded in Phase 6
const resources = {
    en: {
        translation: {
            "dashboard": "Dashboard",
            "downloads": "Downloads",
            "settings": "Settings",
        }
    },
    tr: {
        translation: {
            "dashboard": "Kontrol Paneli",
            "downloads": "İndirmeler",
            "settings": "Ayarlar",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;