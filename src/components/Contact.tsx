"use client";

import { Mail } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="iletisim" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center md:p-12 dark:border-slate-800 dark:bg-slate-900">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-100 blur-3xl dark:bg-indigo-950/60" />
            </div>
            <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
              <SectionHeading
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                subtitle={t.contact.subtitle}
              />
              <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${t.contact.email}`}
                  className="bg-gradient-brand inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <Mail size={16} aria-hidden="true" />
                  {t.contact.emailLabel}
                </a>
                <a
                  href={t.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
                <a
                  href={t.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">{t.contact.email}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
