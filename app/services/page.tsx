import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import Reveal from '@/components/Reveal';

const serviceDetails = [
  {
    icon: '🏥',
    title: 'Doctor Clinic Websites',
    description: 'Appointment booking, doctor profile, clinic location.',
    features: ['Appointment booking', 'Doctor profile pages', 'Clinic location integration']
  },
  {
    icon: '🍽️',
    title: 'Restaurant Websites',
    description: 'Menu display, gallery, contact, Google Maps.',
    features: ['Menu display', 'Food gallery', 'Contact and Google Maps']
  },
  {
    icon: '💪',
    title: 'Gym / Fitness Websites',
    description: 'Trainer profiles, membership plans, gallery.',
    features: ['Trainer profiles', 'Membership plans', 'Fitness gallery']
  },
  {
    icon: '🏪',
    title: 'Small Business Websites',
    description: 'Professional websites for local shops and services.',
    features: ['Professional business layout', 'Service listing blocks', 'Local trust-focused design']
  }
];

export default function ServicesPage() {
  return (
    <section className="container-block section-space">
      <Reveal>
        <SectionTitle
          eyebrow="Services"
          title="Website solutions for growing local brands"
          description="WebLift creates focused, conversion-oriented websites tailored to your business type and customer needs."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {serviceDetails.map((service, index) => (
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
  );
}