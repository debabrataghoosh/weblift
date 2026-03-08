import SectionTitle from '@/components/SectionTitle';
import PortfolioCard from '@/components/PortfolioCard';
import Reveal from '@/components/Reveal';

const projects = [
  {
    title: 'SmileCare Clinic',
    type: 'Clinic Website',
    summary: 'Clean and trustworthy layout with service highlights and direct contact options.'
  },
  {
    title: 'Urban Grill House',
    type: 'Restaurant Website',
    summary: 'Mobile-first restaurant website focused on menu visibility and reservations.'
  },
  {
    title: 'Elite Strength Gym',
    type: 'Gym Website',
    summary: 'Modern fitness website showing plans, trainers, and membership call-to-actions.'
  },
  {
    title: 'City Electronics',
    type: 'Small Business Website',
    summary: 'Business catalog website with clear service listing and strong local branding.'
  },
  {
    title: 'CarePoint Dental',
    type: 'Clinic Website',
    summary: 'Patient-friendly design with appointment prompts and testimonial sections.'
  },
  {
    title: 'Fresh Bowl Kitchen',
    type: 'Restaurant Website',
    summary: 'Fast-loading website built for local search visibility and order-ready presentation.'
  }
];

export default function PortfolioPage() {
  return (
    <section className="container-block section-space">
      <Reveal>
        <SectionTitle
          eyebrow="Portfolio"
          title="Demo projects crafted for local businesses"
          description="A preview of modern websites that WebLift can build for your business category."
        />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 60}>
            <PortfolioCard
              title={project.title}
              type={project.type}
              summary={project.summary}
              imageLabel={project.type}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}