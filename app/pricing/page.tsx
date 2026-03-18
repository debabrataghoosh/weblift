import PricingCard from '@/components/PricingCard';
import Reveal from '@/components/Reveal';

const plans = [
  {
    title: 'Starter',
    subtitle: 'Launch Your Business Online Fast',
    price: '₹4000',
    priceLabel: '(one-time)',
    description: 'Perfect for getting started with your online presence',
    features: [
      'High-converting 1-page website',
      'Fully mobile-optimized design',
      'Lead capture form (get customer enquiries)',
      'Basic SEO setup (Google ready)',
      'Google Analytics integration',
      'Delivery in 3–5 days',
      '2 free revisions'
    ],
    buttonText: 'Start My Website'
  },
  {
    title: 'Business',
    subtitle: 'Grow & Generate More Leads',
    price: '₹8000',
    priceLabel: '(one-time)',
    description: 'Ideal for growing startups and mid-sized companies',
    features: [
      'Up to 5-page professional website',
      'Conversion-focused design',
      'Lead forms + WhatsApp integration',
      'Google Maps integration',
      'Advanced SEO setup',
      'Blog setup (content ready)',
      'Custom branding (colors, fonts, layout)',
      'Delivery in 5–7 days',
      '3 free revisions',
      '14 days support'
    ],
    buttonText: 'Get More Leads Now',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    title: 'Premium',
    subtitle: 'Scale Your Business with Advanced Features',
    price: '₹15000',
    priceLabel: '(one-time)',
    description: 'Perfect for larger organizations with advanced needs',
    features: [
      'Up to 10-page premium website',
      'Advanced UI/UX design',
      'E-commerce ready (sell products online)',
      'Payment gateway integration',
      'Advanced SEO + speed optimization',
      'Priority support (30 days)',
      '🎁 Free domain for 1 year included'
    ],
    buttonText: 'Get My Complete Website'
  }
];

export default function PricingPage() {
  return (
    <section className="relative overflow-hidden border-y border-emerald-300/10 bg-[#03121b] section-space">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_0%,rgba(16,185,129,0.28),transparent_40%),radial-gradient(circle_at_92%_15%,rgba(34,197,94,0.2),transparent_35%),linear-gradient(130deg,#03121b_12%,#071f2f_58%,#0a2e2b_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />
      <div className="container-block relative">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="mx-auto mb-4 inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Pricing
            </p>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              One-time website packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Simple one-time packages to get your business online quickly.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.title} delay={index * 70}>
              <PricingCard
                title={plan.title}
                subtitle={plan.subtitle}
                price={plan.price}
                priceLabel={plan.priceLabel}
                description={plan.description}
                features={plan.features}
                highlighted={plan.highlighted}
                badge={plan.badge}
                buttonText={plan.buttonText}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}