import { Inter } from 'next/font/google';
// import './globals.css'; // Bu import faqat shu yerda bo'lishi kerak

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'EDU.AI - Learn Smarter, Not Harder',
  description: 'AI-powered learning platform to transform your studies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}