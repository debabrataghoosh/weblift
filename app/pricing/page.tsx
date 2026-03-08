import SectionTitle from '@/components/SectionTitle';
import PricingCard from '@/components/PricingCard';
import Reveal from '@/components/Reveal';

const plans = [
  {
    title: 'Starter',
    price: '₹4000',
    features: ['1-page website', 'Mobile responsive design', 'Basic contact form']
  },
  {
    title: 'Business',
    price: '₹8000',
    features: ['Up to 5 pages', 'Lead-focused design', 'WhatsApp and map integration'],
    highlighted: true
  },
  {
    title: 'Premium',
    price: '₹15000',
    features: ['Up to 10 pages', 'Premium UI layout', 'Priority support and updates']
  }
];

export default function PricingPage() {
  return (
    <section className="container-block section-space">
      <Reveal>
        <SectionTitle
          eyebrow="Pricing"
          title="Flexible plans for every business stage"
          description="Simple and affordable packages to get your business online quickly."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal key={plan.title} delay={index * 70}>
            <PricingCard
              title={plan.title}
              price={plan.price}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}