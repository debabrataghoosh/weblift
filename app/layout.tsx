import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'WebLift | Lift Your Business Online',
  description:
    'WebLift helps small businesses build modern, professional websites that attract more local customers.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50/30">
          <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-emerald-100/70 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-green-100/60 blur-3xl" />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}