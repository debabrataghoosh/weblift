type PortfolioCardProps = {
  title: string;
  type: string;
  summary: string;
  imageLabel?: string;
};

export default function PortfolioCard({ title, type, summary, imageLabel }: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-indigo-100/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/70">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-indigo-200/60 via-violet-200/50 to-blue-200/60">
        <div className="absolute inset-0 scale-100 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_75%_65%,rgba(255,255,255,0.18),transparent_42%)] transition duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
        <p className="absolute bottom-4 left-4 text-sm font-medium text-white">
          {imageLabel ?? 'Project preview'}
        </p>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">{type}</p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
      </div>
    </article>
  );
}