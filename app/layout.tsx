import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'IL MARE COFFEE | Boutique Coffee Experience',
  description: 'Crafted with passion, served with elegance. Experience the finest boutique coffee culture right in the heart of Pekalongan.',
  openGraph: {
    title: 'IL MARE COFFEE | Boutique Coffee Experience',
    description: 'Crafted with passion, served with elegance. Experience the finest boutique coffee culture right in the heart of Pekalongan.',
    siteName: 'IL MARE COFFEE',
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} flex flex-col min-h-screen font-sans bg-coffee-bg text-coffee-dark antialiased`}>
        <Header />
        <div className="flex-1 flex flex-col w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
