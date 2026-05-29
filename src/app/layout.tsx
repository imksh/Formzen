import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FormZen",
    template: "%s | FormZen",
  },
  description:
    "FormZen helps teams create polished forms, collect responses, and ship workflows with a corporate, dark-first interface.",
  applicationName: "FormZen",
  keywords: [
    "forms app",
    "form builder",
    "survey builder",
    "response collection",
    "workflow forms",
    "team forms",
  ],
  authors: [{ name: "FormZen" }],
  creator: "FormZen",
  publisher: "FormZen",
  openGraph: {
    title: "FormZen",
    description:
      "Create branded forms, track responses, and manage workflows from one dark corporate workspace.",
    url: "/",
    siteName: "FormZen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormZen",
    description:
      "Create branded forms, track responses, and manage workflows from one dark corporate workspace.",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-100 text-base-content">
        
        {children}
      </body>
    </html>
  );
}
