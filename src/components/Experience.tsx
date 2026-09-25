"use client";

import { Briefcase, MapPin } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="deneyim" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />
        <div className="relative space-y-6 border-l-2 border-slate-100 pl-6 md:pl-8 dark:border-slate-800">
          {t.experience.items.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 60}>
              <article className="relative rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <span
                  aria-hidden="true"
                  className="bg-gradient-brand absolute top-7 -left-[33px] flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white md:-left-[41px] dark:ring-slate-950"
                />
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-heading text-base font-bold text-slate-900 md:text-lg dark:text-white">
                      {job.role}
                    </h3>
                    <p className="mt-1 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase size={14} aria-hidden="true" />
                        {job.company}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500">
                        <MapPin size={14} aria-hidden="true" />
                        {job.location}
                      </span>
                    </p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
