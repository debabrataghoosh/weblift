type PricingCardProps = {
  title: string;
  subtitle?: string;
  price: string;
  priceLabel?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  buttonText?: string;
};

export default function PricingCard({
  title,
  subtitle,
  price,
  priceLabel,
  description,
  features,
  highlighted,
  badge,
  buttonText = 'Select This Plan'
}: PricingCardProps) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border backdrop-blur transition duration-300 ${
        highlighted
          ? 'scale-105 border-emerald-400/50 bg-[#051824] shadow-xl shadow-emerald-500/15'
          : 'border-emerald-300/20 bg-[#051824] hover:-translate-y-0.5 hover:border-emerald-300/30 hover:shadow-md hover:shadow-emerald-500/5'
      }`}
    >
      {badge && (
        <div className="absolute -right-12 top-6 z-20 rotate-45 bg-gradient-to-r from-emerald-400 to-green-400 px-12 py-1 text-center text-xs font-bold text-slate-900">
          {badge}
        </div>
      )}
      
      <div className="relative z-10 flex flex-col p-8 h-full">
        <div className="mb-6">
          <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
          {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1.5">
            <span className="text-5xl font-bold text-white">{price}</span>
            {priceLabel && <span className="text-sm text-slate-400">{priceLabel}</span>}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-emerald-300/15 bg-white/5 p-6">
          <div className="space-y-3.5">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 01 1.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <button className={`w-full rounded-full py-3 text-sm font-semibold transition duration-300 ${
          highlighted
            ? 'bg-gradient-to-r from-emerald-400 to-green-400 text-slate-900 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 active:scale-95'
            : 'bg-gradient-to-r from-emerald-400 to-green-400 text-slate-900 hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 active:scale-95'
        }`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}