"use client";

import * as React from "react";
import { AppLocale, defaultLocale, getMessage } from "@/i18n/messages";

type LanguageContextValue = {
    locale: AppLocale;
    setLocale: (locale: AppLocale) => void;
    t: (key: string) => string;
};

const LANGUAGE_STORAGE_KEY = "illustrator-portfolio-locale";

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

const isAppLocale = (value: unknown): value is AppLocale => {
    return value === "es" || value === "en";
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = React.useState<AppLocale>(defaultLocale);

    React.useEffect(() => {
        const storedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

        if (isAppLocale(storedLocale)) {
            setLocaleState(storedLocale);
            return;
        }

        const browserLanguage = window.navigator.language.toLowerCase();
        if (browserLanguage.startsWith("en")) {
            setLocaleState("en");
        }
    }, []);

    React.useEffect(() => {
        document.documentElement.lang = locale;
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    }, [locale]);

    const setLocale = React.useCallback((nextLocale: AppLocale) => {
        setLocaleState(nextLocale);
    }, []);

    const t = React.useCallback(
        (key: string) => {
            return getMessage(locale, key);
        },
        [locale]
    );

    const value = React.useMemo(
        () => ({
            locale,
            setLocale,
            t,
        }),
        [locale, setLocale, t]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => {
    const context = React.useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }

    return context;
};
