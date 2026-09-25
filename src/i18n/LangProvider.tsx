"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import tr from "./tr.json";
import en from "./en.json";

export type Lang = "tr" | "en";
export type Dictionary = typeof tr;

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
} | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "tr";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "tr" || saved === "en" ? saved : "tr";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang: setLangState, t: lang === "tr" ? tr : en }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
