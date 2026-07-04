import './globals.css';
import { DM_Serif_Display, Inter } from 'next/font/google';

const serif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-serif' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#F3E9D8] text-[#111827] font-sans antialiased">
        <nav className="sticky top-0 z-50 bg-[#F3E9D8]/90 backdrop-blur-md border-b border-[#C56A3C]/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="font-serif text-3xl text-[#C56A3C]">Coffi</a>
            <div className="space-x-8 font-medium">
              <a href="/#story" className="hover:text-[#C56A3C]">Our Story</a>
              <a href="/blends" className="hover:text-[#C56A3C]">Seasonal Blends</a>
              <a href="/#visit" className="hover:text-[#C56A3C]">Visit Us</a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="py-12 text-center text-sm border-t border-[#C56A3C]/20">
          © 2026 Coffi. Crafted in Wales.
        </footer>
      </body>
    </html>
  );
}