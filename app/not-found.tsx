import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-block py-20 text-center">
      <h1 className="text-4xl font-bold text-white">Page not found</h1>
      <p className="mt-3 text-slate-300">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
      >
        Back to Home
      </Link>
    </section>
  );
}