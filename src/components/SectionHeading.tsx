export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-10 flex w-full max-w-2xl flex-col items-center text-center md:mb-14">
      <p className="text-gradient mb-3 text-sm font-bold tracking-widest uppercase">{eyebrow}</p>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl dark:text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 w-full text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
