"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type Locale, translations } from "@/data/translations";

type Language = Locale;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string, values?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

function resolveTranslation(locale: Language, key: string): string | undefined {
  const path = key.split(".");

  const lookupByPath = (
    value: unknown,
    segments: string[]
  ): string | undefined => {
    let current: unknown = value;

    for (const segment of segments) {
      if (!isRecord(current) || !(segment in current)) {
        return undefined;
      }

      current = current[segment];
    }

    return typeof current === "string" ? current : undefined;
  };

  const lookupByName = (value: unknown, target: string): string | undefined => {
    if (!isRecord(value)) {
      return undefined;
    }

    if (target in value) {
      const candidate = value[target];
      if (typeof candidate === "string") {
        return candidate;
      }
    }

    for (const child of Object.values(value)) {
      const found = lookupByName(child, target);
      if (found) {
        return found;
      }
    }

    return undefined;
  };

  return (
    lookupByPath(translations[locale], path) ??
    lookupByName(translations[locale], key) ??
    undefined
  );
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedLanguage = window.localStorage.getItem("xans-language");
    const nextLang = savedLanguage === "id" ? "id" : "en";
    setLang(nextLang);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("xans-language", lang);
    document.documentElement.lang = lang;
  }, [lang, isHydrated]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = (key: string, values?: Record<string, string | number>) => {
    const template =
      resolveTranslation(lang, key) ??
      resolveTranslation("en", key) ??
      String(key);

    return values
      ? template.replace(
          /\{(\w+)\}/g,
          (_, name: string) => String(values[name] ?? `{${name}}`)
        )
      : template;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}