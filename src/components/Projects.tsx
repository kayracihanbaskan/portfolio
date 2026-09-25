"use client";

import { ExternalLink } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { GithubIcon } from "./BrandIcons";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  const { t } = useLang();

  return (
    <section id="projeler" className="scroll-mt-20 bg-slate-50/60 dark:bg-slate-900/40">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {t.projects.items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/40">
                <div className="bg-gradient-brand h-1 w-12 rounded-full opacity-70 transition-all group-hover:w-20 group-hover:opacity-100" />
                <p className="mt-4 text-xs font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                  {p.type}
                </p>
                <h3 className="font-heading mt-1 text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
                  >
                    <GithubIcon size={16} />
                    {t.projects.viewCode}
                  </a>
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      {t.projects.viewLive}
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
