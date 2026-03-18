import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-emerald-300/10 bg-[#03121b] pb-0 pt-0">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(16,185,129,0.28),transparent_42%),radial-gradient(circle_at_92%_12%,rgba(34,197,94,0.2),transparent_38%),linear-gradient(135deg,#03121b_12%,#072130_55%,#0a2d2a_100%)]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,18,27,0.42),rgba(3,18,27,0.68))]" aria-hidden />
      </div>
      <div className="relative">
        <AnimatedGridPattern
          width={80}
          height={80}
          numSquares={20}
          maxOpacity={0.3}
          duration={3}
          repeatDelay={1}
          className="text-emerald-300/80 [mask-image:radial-gradient(680px_circle_at_center,white,transparent)]"
        />

        <div className="container-block relative flex min-h-[calc(100vh-5rem)] items-center py-14 sm:py-20">
          <Reveal className="mx-auto w-full max-w-4xl text-center">
            <p className="mb-6 inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
              WebLift
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-6xl">
              Modern business websites made easy.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We help clinics, restaurants, gyms, and local brands launch high-converting websites without the usual hassle.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="gradient-button w-full sm:w-auto">
                Create Website
              </Link>
              <Link
                href="/portfolio"
                className="w-full rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/15 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 sm:w-auto"
              >
                View Work
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left backdrop-blur">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300">Industries</p>
                <p className="mt-1 text-sm font-medium text-slate-100">Clinics, Gyms, Restaurants</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left backdrop-blur">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300">Focus</p>
                <p className="mt-1 text-sm font-medium text-slate-100">Local lead generation</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left backdrop-blur">
                <p className="text-xs uppercase tracking-[0.14em] text-emerald-300">Experience</p>
                <p className="mt-1 text-sm font-medium text-slate-100">Premium fintech-style UI</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}