import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-300/12 bg-[#03121b] py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(16,185,129,0.22),transparent_40%),radial-gradient(circle_at_92%_20%,rgba(34,197,94,0.16),transparent_38%),linear-gradient(135deg,#03121b_12%,#071f2f_56%,#0a2e2b_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px] opacity-30" />
      <div className="container-block relative grid gap-10 text-sm text-slate-300 md:grid-cols-4">
        <div>
          <p className="text-2xl font-bold tracking-tight text-white">WebLift</p>
          <p className="mt-3 text-slate-400">Lift Your Business Online</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-300">Quick Links</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="transition hover:text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="transition hover:text-white">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-300">Services</p>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li>Doctor Clinic Websites</li>
            <li>Restaurant Websites</li>
            <li>Gym / Fitness Websites</li>
            <li>Small Business Websites</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-300">Contact</p>
          <ul className="mt-4 space-y-2 text-slate-400">
            <li>Email: hello@webliftstore.in</li>
            <li>Phone: +91 7318643695</li>
            <li>Phone: +91 8250569747</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      <div className="container-block relative mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} WebLift. All rights reserved.
      </div>
    </footer>
  );
}