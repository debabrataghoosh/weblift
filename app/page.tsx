import Link from 'next/link';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import PortfolioCard from '@/components/PortfolioCard';
import PricingCard from '@/components/PricingCard';
import HeroSection from '@/components/HeroSection';
import Reveal from '@/components/Reveal';

const services = [
  {
    icon: '🏥',
    title: 'Doctor Clinic Websites',
    description: 'Appointment booking, doctor profile, clinic location.',
    features: ['Easy appointment inquiry', 'Trust-focused profile pages', 'Google Maps integration']
  },
  {
    icon: '🍽️',
    title: 'Restaurant Websites',
    description: 'Menu display, gallery, contact, Google Maps.',
    features: ['Digital menu showcase', 'Photo gallery sections', 'Maps and direct contact']
  },
  {
    icon: '💪',
    title: 'Gym / Fitness Websites',
    description: 'Trainer profiles, membership plans, gallery.',
    features: ['Trainer spotlight', 'Plan comparison section', 'Transformation gallery']
  },
  {
    icon: '🏪',
    title: 'Small Business Websites',
    description: 'Professional websites for local shops and services.',
    features: ['Professional online presence', 'Service highlights', 'Lead capture forms']
  }
];

const portfolio = [
  {
    title: 'HealthCare Plus Clinic',
    type: 'Clinic Website',
    summary: 'A responsive clinic website focused on patient trust and quick contact.'
  },
  {
    title: 'Spice Street Kitchen',
    type: 'Restaurant Website',
    summary: 'A bold menu-first website helping local diners explore and order faster.'
  },
  {
    title: 'PowerFit Studio',
    type: 'Gym Website',
    summary: 'A conversion-driven site featuring class plans and membership highlights.'
  }
];

const pricing = [
  {
    title: 'Starter',
    price: '₹4000',
    features: ['1-Page Website', 'Mobile Responsive', 'Basic SEO Setup']
  },
  {
    title: 'Business',
    price: '₹8000',
    features: ['Up to 5 Pages', 'Lead Form Integration', 'Google Map + WhatsApp'],
    highlighted: true
  },
  {
    title: 'Premium',
    price: '₹15000',
    features: ['Up to 10 Pages', 'Advanced UI Design', 'Priority Support']
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="container-block section-space">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="Website solutions built for local growth"
            description="From healthcare to hospitality, we design websites that look professional and generate leads."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-block section-space">
        <Reveal>
          <SectionTitle
            eyebrow="Portfolio"
            title="Recent demo projects"
            description="Examples of how WebLift creates modern websites for different business categories."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <PortfolioCard
                title={item.title}
                type={item.type}
                summary={item.summary}
                imageLabel={item.type}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-block section-space">
        <Reveal>
          <SectionTitle
            eyebrow="Pricing"
            title="Simple plans for every stage"
            description="Choose a plan that matches your business goals and timeline."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((plan, index) => (
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

      <section className="container-block section-space">
        <Reveal>
          <div className="card border-indigo-200/80 bg-gradient-to-r from-indigo-100 via-violet-100 to-blue-100 p-10 text-center shadow-xl shadow-indigo-100/80">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ready to grow your business online?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Let WebLift build a fast, modern website that helps your local business stand out.
            </p>
            <Link href="/contact" className="gradient-button mt-8 inline-block">
              Contact WebLift
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}