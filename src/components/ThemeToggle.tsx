"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLang } from "@/i18n/LangProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
      aria-pressed={isDark}
      title={isDark ? t.nav.themeLight : t.nav.themeDark}
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
