import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Brandhive — Web & Brand Design For Ambitious Founders',
  description: 'Brandhive is a premier digital design studio building high-contrast, conversion-engineered websites and brand identities for ambitious founders.',
  keywords: ['Brandhive', 'Agency', 'SaaS', 'Web Design', 'UI/UX', 'Branding', 'Next.js', 'Framer'],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/Brandhive_Icon Black.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/Brandhive_Icon Black.png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/images/Brandhive_Icon Black.png" />
        <link rel="apple-touch-icon" href="/images/Brandhive_Icon Black.png" />
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
