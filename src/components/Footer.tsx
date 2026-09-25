"use client";

import { useLang } from "@/i18n/LangProvider";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto w-full max-w-5xl px-5 py-8 text-center md:px-8">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2026 Kayra Cihan Başkan · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
