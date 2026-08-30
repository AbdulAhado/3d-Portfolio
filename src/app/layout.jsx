import '../styles/globals.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://abdulahad.dev'),
  title: 'Abdul Ahad Saeed | Full Stack Developer Portfolio',
  description: 'Abdul Ahad Saeed — Full Stack MERN Developer at Terapage.ai. Building scalable, AI-powered web applications. View projects, skills, and get in touch.',
  keywords: ['Abdul Ahad Saeed', 'Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'Portfolio', 'AI Engineer'],
  authors: [{ name: 'Abdul Ahad Saeed' }],
  icons: {
    icon: '/about-1.png',
    shortcut: '/about-1.png',
    apple: '/about-1.png',
  },
  openGraph: {
    type: 'website',
    title: 'Abdul Ahad Saeed | Full Stack Developer',
    description: 'Full Stack MERN & AI Developer — Next.js, React, Node.js, MongoDB, AI-powered applications.',
    images: ['/frontend.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Ahad Saeed | Full Stack Developer',
    description: 'Full Stack MERN & AI Developer — Next.js, React, Node.js, MongoDB, AI-powered applications.',
    images: ['/frontend.png'],
  },
};

export const viewport = {
  themeColor: '#0d1015',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0d1015] text-[#f8fafc] font-sans antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
