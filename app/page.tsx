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
      'Free domain for 1 year included'
    ],
    buttonText: 'Get My Complete Website'
  }
];

const testimonials = [
  {
    name: 'Rahul Sen',
    role: 'Clinic Owner',
    avatarUrl: 'https://i.pravatar.cc/120?img=12',
    rating: 4.8,
    quote:
      'The team delivered a clean, professional website that helped us get more appointment calls in the first month.'
  },
  {
    name: 'Ananya Roy',
    role: 'Restaurant Founder',
    avatarUrl: 'https://i.pravatar.cc/120?img=32',
    rating: 4.7,
    quote:
      'Our menu and contact flow are now super easy for customers. We started receiving more direct WhatsApp enquiries.'
  },
  {
    name: 'Arjun Das',
    role: 'Gym Manager',
    avatarUrl: 'https://i.pravatar.cc/120?img=59',
    rating: 4.9,
    quote:
      'The new website looks premium and loads fast. Membership enquiries increased and clients trust our brand more.'
  },
  {
    name: 'Puja Ghosh',
    role: 'Local Business Owner',
    avatarUrl: 'https://i.pravatar.cc/120?img=47',
    rating: 4.6,
    quote:
      'Very smooth process from start to finish. The website is easy to manage and perfect for our local audience.'
  },
  {
    name: 'Sourav Mitra',
    role: 'Dental Clinic Manager',
    avatarUrl: 'https://i.pravatar.cc/120?img=15',
    rating: 4.8,
    quote: 'Booking requests became much easier to manage after our new website launch.'
  },
  {
    name: 'Niharika Paul',
    role: 'Salon Owner',
    avatarUrl: 'https://i.pravatar.cc/120?img=36',
    rating: 4.7,
    quote: 'Our brand looks more premium now, and customers can contact us instantly.'
  },
  {
    name: 'Karan Mehta',
    role: 'Restaurant Manager',
    avatarUrl: 'https://i.pravatar.cc/120?img=64',
    rating: 4.9,
    quote: 'The menu layout and mobile speed made a big difference for our local traffic.'
  },
  {
    name: 'Priyanka Dey',
    role: 'Fitness Studio Owner',
    avatarUrl: 'https://i.pravatar.cc/120?img=5',
    rating: 4.6,
    quote: 'The design quality is excellent and we started getting better-quality enquiries.'
  }
];

export default function HomePage() {
  const scrollingTestimonials = [...testimonials, ...testimonials];

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
                One-time packages for every stage
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                Choose a one-time package that matches your business goals and timeline.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((plan, index) => (
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

      <section className="container-block section-space">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto mb-4 inline-flex rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Real feedback from satisfied customers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              See what local business owners say about working with WebLift.
            </p>
          </div>
        </Reveal>

        <div className="testimonial-marquee mt-10 pb-2">
          <div className="testimonial-marquee-track flex min-w-max gap-5 cursor-grab active:cursor-grabbing">
            {scrollingTestimonials.map((item, index) => (
              <Reveal key={`${item.name}-${index}`} delay={index * 40}>
                <article className="flex h-[260px] w-[320px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-4 flex items-center gap-3">
                    <img
                      src={item.avatarUrl}
                      alt={`${item.name} profile`}
                      className="h-11 w-11 rounded-full border border-slate-200 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="flex-1 overflow-hidden text-sm leading-relaxed text-slate-700">“{item.quote}”</p>
                  <div className="mt-4 flex items-center gap-2 pt-2">
                    <p className="text-base text-amber-400">★★★★☆</p>
                    <p className="text-sm font-semibold text-slate-700">{item.rating.toFixed(1)}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-block section-space">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 px-6 py-14 text-center shadow-2xl shadow-emerald-950/35 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(16,185,129,0.24),transparent_42%),radial-gradient(circle_at_92%_18%,rgba(34,197,94,0.2),transparent_40%),linear-gradient(130deg,#03111c_14%,#062033_55%,#0a2f2d_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-25" />

            <div className="relative">
              <div className="mx-auto mb-7 flex max-w-xs flex-col items-center gap-3 text-white">
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-300">
                  <span>★★★★★</span>
                  <span className="text-white">4.9/5</span>
                </div>
                <div className="flex items-center -space-x-2">
                  <img src="https://i.pravatar.cc/60?img=12" alt="Client avatar" className="h-8 w-8 rounded-full border-2 border-white/80 object-cover" loading="lazy" />
                  <img src="https://i.pravatar.cc/60?img=36" alt="Client avatar" className="h-8 w-8 rounded-full border-2 border-white/80 object-cover" loading="lazy" />
                  <img src="https://i.pravatar.cc/60?img=59" alt="Client avatar" className="h-8 w-8 rounded-full border-2 border-white/80 object-cover" loading="lazy" />
                  <img src="https://i.pravatar.cc/60?img=5" alt="Client avatar" className="h-8 w-8 rounded-full border-2 border-white/80 object-cover" loading="lazy" />
                  <span className="ml-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-800">100+</span>
                </div>
                <p className="text-sm text-slate-200">Trusted by local businesses across multiple categories</p>
              </div>

              <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Ready to Grow Your Business Online?
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300 sm:text-xl">
                Let WebLift build a fast, modern website that helps your local business stand out and capture more leads.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 px-8 py-3 text-base font-semibold text-slate-900 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/35"
              >
                Get Started Now
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}