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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-md">
      <div className="container-block flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 transition hover:text-indigo-700 sm:text-2xl"
        >
          WebLift
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="gradient-button px-4 py-2.5">
          Get Website
        </Link>
      </div>
    </header>
  );
}