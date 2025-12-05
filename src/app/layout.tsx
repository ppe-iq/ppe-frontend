import "@/app/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";

import { bebasNeue, montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";

// Props
type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="custom-scrollbar scroll-smooth">
      <body
        className={cn(
          "bg-primary-450/10 font-montserrat text-secondary-900 antialiased",
          bebasNeue.variable,
          montserrat.variable,
        )}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
