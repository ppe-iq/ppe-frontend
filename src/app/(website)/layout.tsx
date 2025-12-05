import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import Header from "@/app/(website)/_components/header";
import Slogan from "@/app/(website)/_components/slogan";
import NavigationProgress from "@/components/global/navigation-progress";
import { Toaster } from "@/components/ui/sonner";
import LenisProvider from "@/providers/lenis-provider";

import FooterWrapper from "./_sections/footer/wrapper";

// ---- Metadata ----
export const metadata: Metadata = {
  metadataBase: new URL("https://ppe-iq.com"),
  title: {
    default: "PPE | Proactive Premium Engineering",
    template: "%s | PPE | Proactive Premium Engineering",
  },
  description:
    "Proactive Premium Engineering provides world-class engineering services, training, and condition monitoring solutions to boost industrial reliability.",

  icons: {
    icon: "/icons/favicon.svg",
  },

  openGraph: {
    title: "PPE | Proactive Premium Engineering",
    description:
      "PPE delivers engineering excellence across industries — from vibration analysis to precision alignment and reliability consulting.",
    url: "https://ppe-iq.com",
    siteName: "Proactive Premium Engineering",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/logo.png",
        width: 1200,
        height: 630,
        alt: "PPE Website Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PPE | Proactive Premium Engineering",
    description:
      "Explore PPE's engineering insights, services, and innovations in reliability, condition monitoring, and precision maintenance.",
    images: ["https://ppe-iq.com/images/meta/logo.png"],
  },

  alternates: {
    canonical: "https://ppe-iq.com",
  },
};

// ---- Layout ----
export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Navigation Progress */}
      <NavigationProgress />

      {/* Header */}
      <Header />

      {/* Lenis smooth scrolling provider */}
      <LenisProvider>
        <main className="relative mx-auto my-20 flex min-h-screen max-w-[1512px] flex-col items-center justify-center gap-32 px-2 sm:px-4 2xl:px-10">
          {children}

          {/* Analytics */}
          <SpeedInsights />
          <Analytics />

          {/* Background slogan spinner */}
          <Slogan />
        </main>

        {/* Footer */}
        <FooterWrapper />
      </LenisProvider>

      {/* Toast notifications */}
      <Toaster richColors />
    </>
  );
}
