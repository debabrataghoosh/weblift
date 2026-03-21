import Link from 'next/link';
import Image from 'next/image';
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

        <div className="container-block relative flex min-h-[calc(100vh-5rem)] items-center pb-0 pt-14 sm:pt-20">
          <Reveal className="mx-auto w-full max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-6xl">
              Cross-border quality websites made easy.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We help clinics, restaurants, gyms, and local brands launch high-converting websites without the usual hassle.
            </p>

            <div className="relative z-30 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="gradient-button inline-flex h-14 w-full items-center justify-center px-8 text-base sm:w-auto sm:min-w-[210px]"
              >
                Create Website
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-emerald-300/35 bg-emerald-500/15 px-8 text-base font-semibold text-white transition duration-300 hover:bg-emerald-500/25 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 sm:w-auto sm:min-w-[210px]"
              >
                View Work
              </Link>
            </div>

            <div className="relative z-10 mx-auto -mt-14 w-full max-w-7xl sm:-mt-16">
              <div className="absolute -left-4 top-8 z-20 hidden rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-left shadow-lg shadow-black/20 md:block">
                <p className="text-xs text-slate-500">Total Projects</p>
                <p className="text-2xl font-bold text-slate-900">120+</p>
              </div>

              <div className="absolute -right-4 top-12 z-20 hidden rounded-2xl border border-white/20 bg-white/95 px-4 py-3 text-left shadow-lg shadow-black/20 md:block">
                <p className="text-xs text-slate-500">Client Rating</p>
                <p className="text-2xl font-bold text-slate-900">4.9/5</p>
              </div>

              <div className="relative overflow-hidden">
                <Image
                  src="/hero-lpatop.png"
                  alt="WebLift hero interface preview"
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}