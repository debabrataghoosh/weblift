type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  features?: string[];
};

export default function ServiceCard({ icon, title, description, features = [] }: ServiceCardProps) {
  return (
    <div className="card rounded-2xl border-slate-200 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100/70">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-2xl">
        <span aria-hidden>{icon}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}