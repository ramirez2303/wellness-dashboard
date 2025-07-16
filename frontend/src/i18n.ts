import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import common_en from "@/locales/en/common.json";
import common_es from "@/locales/es/common.json";

const isServer = typeof window === "undefined";

i18n.use(initReactI18next);

if (!isServer) {
    i18n.use(LanguageDetector);
}

i18n.init({
    resources: {
        en: { common: common_en },
        es: { common: common_es },
    },
    fallbackLng: "es",
    defaultNS: "common",
    interpolation: { escapeValue: false },
});
export default i18n;
