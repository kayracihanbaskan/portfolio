"use client";

import { Award, GraduationCap, Languages } from "lucide-react";
import { useLang } from "@/i18n/LangProvider";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  const { t } = useLang();

  return (
    <section id="yetenekler" className="scroll-mt-20 bg-slate-50/60">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />
        <div className="grid gap-5 md:grid-cols-2">
          {t.skills.groups.map((g, i) => (
            <Reveal key={g.name} delay={(i % 2) * 80}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-heading text-base font-bold text-slate-900">{g.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700 md:text-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-5 grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 md:grid-cols-3">
            <div className="flex gap-3">
              <GraduationCap size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-indigo-600" />
              <div>
                <p className="text-sm font-bold text-slate-900">{t.education.degree}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {t.education.school} · {t.education.period}
                </p>
                <p className="text-sm text-slate-500">{t.education.gpa}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Award size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-violet-600" />
              <p className="text-sm leading-relaxed text-slate-600">{t.education.award}</p>
            </div>
            <div className="flex gap-3">
              <Languages size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-sky-600" />
              <p className="text-sm text-slate-600">{t.education.english}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
