import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Lamosa Studio — Premium Agency & SaaS Template',
  description: 'Lamosa is a sleek, high-quality website template designed for creative studios and SaaS founders. High-contrast design, conversion-optimized, and built for speed.',
  keywords: ['Agency', 'SaaS', 'Framer Template', 'Next.js', 'Web Design', 'UI/UX', 'Branding'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fafafa] text-[#0a0a0a] min-h-screen flex flex-col antialiased selection:bg-black selection:text-white">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
