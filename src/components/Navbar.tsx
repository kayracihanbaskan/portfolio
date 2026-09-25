"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "#projeler", key: "projects", width: "w-[64px]" },
  { href: "#deneyim", key: "experience", width: "w-[68px]" },
  { href: "#yetenekler", key: "skills", width: "w-[76px]" },
  { href: "#iletisim", key: "contact", width: "w-[60px]" },
] as const;

export function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open ]);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-3 px-5 md:px-8"
      >
        <a
          href="#top"
          className="font-heading w-[64px] shrink-0 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          KCB<span className="text-gradient">.</span>
        </a>
        <div className="hidden items-center justify-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${l.width} shrink-0 text-center text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white`}
            >
              {t.nav[l.key]}
            </a>
          ))}
        </div>
        <div className="hidden w-[240px] shrink-0 items-center justify-end gap-2 md:flex">
          <LangToggle />
          <ThemeToggle />
          <a
            href={`mailto:${t.contact.email}`}
            className="bg-gradient-brand inline-flex min-h-[44px] w-[104px] shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            {t.nav.contact}
          </a>
        </div>
        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={t.nav.menuLabel}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="border-t border-slate-100 bg-white px-5 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block min-h-[44px] py-3 text-base font-medium text-slate-700 dark:text-slate-200"
            >
              {t.nav[l.key]}
            </a>
          ))}
          <a
            href={`mailto:${t.contact.email}`}
            className="bg-gradient-brand mt-2 flex min-h-[44px] items-center justify-center rounded-full text-sm font-semibold text-white"
          >
            {t.nav.contact}
          </a>
        </div>
      ) : null}
    </header>
  );
}
