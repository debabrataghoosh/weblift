import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-300/10 bg-[#03121b] backdrop-blur-xl">
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_18%_0%,rgba(16,185,129,0.28),transparent_42%),radial-gradient(circle_at_92%_12%,rgba(34,197,94,0.2),transparent_38%)]"
        aria-hidden
      />
      <div className="container-block relative flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white transition hover:text-emerald-400 sm:text-2xl"
        >
          WebLift
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="gradient-button px-5 py-2.5">
          Get Website
        </Link>
      </div>
    </header>
  );
}