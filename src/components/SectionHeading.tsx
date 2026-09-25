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
    <div className="mb-10 md:mb-14">
      <p className="text-gradient mb-3 text-sm font-bold tracking-widest uppercase">{eyebrow}</p>
      <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
