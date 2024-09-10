import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import tr from "./tr";
import fr from "./fr";
import nl from "./nl";
import ru from "./ru";
import es from "./es";
import de from "./de";
import AsyncStorage from "@react-native-async-storage/async-storage";
i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    lng: "tr",
    resources: {
        en: en,
        tr: tr,
        fr: fr,
        nl: nl,
        ru: ru,
        es: es,
        de: de
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    },
});
AsyncStorage.getItem("lang").then((lang) => {
    if (lang) {
        i18n.changeLanguage(lang);
    }
});

export const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    AsyncStorage.setItem("lang", lang);
};
export default i18n;