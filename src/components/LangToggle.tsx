"use client";

import { useLang } from "@/i18n/LangProvider";

export function LangToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className="flex w-[112px] shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-900"
      role="group"
      aria-label={t.nav.langLabel}
    >
      {(["tr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`min-h-[36px] w-[52px] shrink-0 rounded-full text-sm font-semibold transition-colors ${
            lang === l
              ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
              : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
