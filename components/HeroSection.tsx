import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function HeroSection() {
  return (
    <section className="container-block section-space">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-blue-500 p-[1px] shadow-2xl shadow-indigo-200/70">
        <div className="absolute -left-24 -top-24 h-52 w-52 rounded-full bg-indigo-200/70 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-cyan-200/70 blur-3xl" aria-hidden />

        <div className="relative rounded-3xl border border-white/60 bg-white/85 px-5 py-12 backdrop-blur-xl sm:px-12 sm:py-20">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
              WebLift
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-6xl">
              Lift Your Business Online
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We build professional websites for clinics, restaurants, gyms, and small businesses.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="gradient-button w-full sm:w-auto">
                Get Your Website
              </Link>
              <Link
                href="/portfolio"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-100 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 sm:w-auto"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-left shadow-sm shadow-indigo-100/50">
                <p className="text-xs uppercase tracking-[0.14em] text-indigo-700">Industries</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Clinics, Gyms, Restaurants</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-left shadow-sm shadow-indigo-100/50">
                <p className="text-xs uppercase tracking-[0.14em] text-indigo-700">Focus</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Local lead generation</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-left shadow-sm shadow-indigo-100/50">
                <p className="text-xs uppercase tracking-[0.14em] text-indigo-700">Experience</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Premium startup-style UI</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}