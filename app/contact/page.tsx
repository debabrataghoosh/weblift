import SectionTitle from '@/components/SectionTitle';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { Suspense } from 'react';

export default function ContactPage() {
  return (
    <section className="container-block section-space">
      <Reveal>
        <SectionTitle
          eyebrow="Contact"
          title="Tell us about your business"
          description="Share your requirements and WebLift will reach out with the right website plan."
        />
      </Reveal>

      <Reveal delay={80}>
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </Reveal>
    </section>
  );
}