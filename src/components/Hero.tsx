"use client";

import { ArrowDown, Mail, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-10%] h-72 w-72 rounded-full bg-indigo-100 blur-3xl md:h-96 md:w-96 dark:bg-indigo-950/60" />
        <div className="absolute top-24 left-[-12%] h-64 w-64 rounded-full bg-sky-100 blur-3xl md:h-80 md:w-80 dark:bg-sky-950/50" />
      </div>
      <div className="relative mx-auto w-full max-w-5xl px-5 pt-16 pb-14 md:px-8 md:pt-24 md:pb-20">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm md:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t.hero.availability}
        </p>
        <p className="text-base font-medium text-slate-500 md:text-lg dark:text-slate-400">{t.hero.greeting}</p>
        <h1 className="font-heading mt-2 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-white">
          {t.hero.name}
          <span className="text-gradient">.</span>
        </h1>
        <p className="text-gradient mt-3 text-lg font-bold md:text-2xl">{t.hero.title}</p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
          {t.hero.summary}
        </p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <MapPin size={16} aria-hidden="true" />
          {t.hero.location}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projeler"
            className="bg-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
          >
            {t.hero.ctaProjects}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${t.contact.email}`}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            <Mail size={16} aria-hidden="true" />
            {t.hero.ctaContact}
          </a>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <a
            href={t.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={t.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${t.contact.email}`}
            aria-label={t.contact.emailLabel}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
