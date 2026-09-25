"use client";

import { useLang } from "@/i18n/LangProvider";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-center md:flex-row md:px-8 md:text-left">
        <p className="text-sm text-slate-500">
          © 2026 Kayra Cihan Başkan · {t.footer.rights}
        </p>
        <p className="text-xs text-slate-400">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
