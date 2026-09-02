import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeScript } from "@/components/theme-script";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Meet Grok Bot — Community",
    template: "%s · Grok Bot Community",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Meet Grok Bot — Community",
    description: site.description,
    images: [{ url: site.ogImage, width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Grok Bot — Community",
    description: site.description,
    images: [site.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`light ${GeistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full bg-bg font-[family-name:var(--font-text)] text-jet">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
