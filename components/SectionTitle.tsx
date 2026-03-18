type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description
}: SectionTitleProps) {
  return (
    <div className="mb-14 max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg text-slate-600">{description}</p> : null}
    </div>
  );
}