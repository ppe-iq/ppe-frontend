"use client";

import Image from "next/image";

import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";

export default function WebsiteNotFound() {
  return (
    <section className="flex min-h-[calc(100vh-10rem)] items-center justify-center px-4">
      <div className="text-center">
        <Image
          src="/images/empty-state/404.svg"
          alt="Page not found"
          width={400}
          height={400}
          className="mx-auto mb-8"
          priority
        />

        <h2 className="font-bebas from-primary-900 to-primary-800 mb-4 bg-gradient-to-r bg-clip-text text-5xl tracking-wider text-transparent">
          Oops! Page Not Found
        </h2>

        <p className="text-secondary-700 mx-auto mb-8 max-w-md text-lg">
          The page you&apos;re looking for seems to have gone missing.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <PrimaryButton
            href="/"
            className="w-full sm:w-auto"
            containerClassNames="w-full sm:w-auto"
          >
            Back to Home
          </PrimaryButton>

          <SecondaryButton
            href="/products"
            className="w-full sm:w-auto"
            containerClassName="w-full sm:w-auto"
          >
            Browse Products
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
