import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 py-16 backdrop-blur">
      <div className="container-block grid gap-10 text-sm text-slate-600 md:grid-cols-4">
        <div>
          <p className="text-2xl font-bold tracking-tight text-slate-900">WebLift</p>
          <p className="mt-3 text-slate-500">Lift Your Business Online</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-600">Quick Links</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="transition hover:text-slate-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-slate-900">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="transition hover:text-slate-900">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="transition hover:text-slate-900">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-600">Services</p>
          <ul className="mt-4 space-y-2 text-slate-500">
            <li>Doctor Clinic Websites</li>
            <li>Restaurant Websites</li>
            <li>Gym / Fitness Websites</li>
            <li>Small Business Websites</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-600">Contact</p>
          <ul className="mt-4 space-y-2 text-slate-500">
            <li>Email: hello@weblift.in</li>
            <li>Phone: +91 90000 00000</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      <div className="container-block mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} WebLift. All rights reserved.
      </div>
    </footer>
  );
}