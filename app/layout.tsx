import { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: {
    default: 'Orange Clinic - Your Trusted Healthcare Partner',
    template: '%s | Orange Clinic'
  },
  description: 'Welcome to Orange Clinic, where we provide exceptional healthcare services with a focus on patient well-being and professional medical care.',
  keywords: 'healthcare, medical clinic, Orange Clinic, medical services, healthcare provider',
  openGraph: {
    title: 'Orange Clinic - Your Trusted Healthcare Partner', 
    description: 'Welcome to Orange Clinic, where we provide exceptional healthcare services.',
    type: 'website',
  },
  icons: {
      icon: "/logo.png" // or .ico, .svg, etc.
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
