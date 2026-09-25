"use client";

import { useLang } from "@/i18n/LangProvider";

export function LangToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-1"
      role="group"
      aria-label={t.nav.langLabel}
    >
      {(["tr", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`min-h-[36px] min-w-[44px] rounded-full px-3 text-sm font-semibold transition-colors ${
            lang === l ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
