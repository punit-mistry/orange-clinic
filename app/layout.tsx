import { Metadata, Viewport } from 'next'
import {  Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedFooter from "@/components/animated-footer";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Orange Clinic - Your Trusted Healthcare Partner',
    template: '%s | Orange Clinic'
  },
  description: 'Welcome to Orange Clinic, where we provide exceptional healthcare services with a focus on patient well-being and professional medical care.',
  keywords: 'healthcare, medical clinic, Orange Clinic, medical services, healthcare provider',
  openGraph: {
    title: 'Orange Clinic - Your Trusted Healthcare Partner',
    description: 'Welcome to Orange Clinic, where we provide exceptional healthcare services with a focus on patient well-being and professional medical care.',
    url: 'https://orange-clinic.com',
    siteName: 'Orange Clinic',
    images: [
      {
        url: 'https://i.ibb.co/G408vPL4/full-company-logo.png',
        width: 1200,
        height: 630,
        alt: 'Orange Clinic Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orange Clinic - Your Trusted Healthcare Partner',
    description: 'Welcome to Orange Clinic, where we provide exceptional healthcare services with a focus on patient well-being and professional medical care.',
    images: ['https://i.ibb.co/G408vPL4/full-company-logo.png'],
  },
  // WhatsApp specific metadata
  other: {
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': 'Orange Clinic Logo',
    'og:image:secure_url': 'https://i.ibb.co/G408vPL4/full-company-logo.png',
    // LinkedIn specific metadata
    'linkedin:card': 'summary_large_image',
    'linkedin:title': 'Orange Clinic - Your Trusted Healthcare Partner',
    'linkedin:description': 'Welcome to Orange Clinic, where we provide exceptional healthcare services with a focus on patient well-being and professional medical care.',
    'linkedin:image': 'https://i.ibb.co/G408vPL4/full-company-logo.png',
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${roboto.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
            {children}
          <AnimatedFooter/>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
