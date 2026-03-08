type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export default function PricingCard({
  title,
  price,
  features,
  highlighted
}: PricingCardProps) {
  return (
    <div
      className={`card flex h-full flex-col rounded-2xl transition duration-300 ${
        highlighted
          ? 'scale-105 border-indigo-500 bg-indigo-50 shadow-xl shadow-indigo-200/80'
          : 'border-slate-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/70'
      }`}
    >
      <h3 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{price}</p>
      <ul className="mt-6 space-y-2 text-sm text-slate-700">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-0.5 text-indigo-600" aria-hidden>
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="gradient-button mt-8 w-full">
        Choose Plan
      </button>
    </div>
  );
}