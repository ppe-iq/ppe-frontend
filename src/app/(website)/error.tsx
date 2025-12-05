"use client";

import Image from "next/image";
import { useEffect } from "react";

import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";

export default function WebsiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Website error:", error);
  }, [error]);

  return (
    <section className="flex min-h-[calc(100vh-10rem)] items-center justify-center px-4">
      <div className="text-center">
        <Image
          src="/images/empty-state/error.svg"
          alt="Error occurred"
          width={400}
          height={400}
          className="mx-auto mb-8"
        />

        <h1 className="font-bebas from-primary-900 to-primary-800 mb-4 bg-gradient-to-r bg-clip-text text-7xl tracking-wider text-transparent">
          Oops!
        </h1>

        <h2 className="font-bebas text-primary-800 mb-2 text-3xl">
          Something Went Wrong
        </h2>

        <p className="text-secondary-700 mx-auto mb-8 max-w-md text-lg">
          We encountered an unexpected error. Don&apos;t worry, our team has
          been notified.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <PrimaryButton
            onClick={reset}
            className="w-full sm:w-auto"
            containerClassNames="w-full sm:w-auto"
          >
            Try Again
          </PrimaryButton>

          <SecondaryButton
            href="/"
            className="w-full sm:w-auto"
            containerClassName="w-full sm:w-auto"
          >
            Back to Home
          </SecondaryButton>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="bg-secondary-500 mt-8 overflow-hidden rounded-md p-4 text-left break-all">
            <p className="mb-2 font-mono text-sm break-words break-all text-red-600">
              {error.message}
            </p>
            <pre className="text-secondary-800 text-xs text-wrap break-all">
              {error.stack}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
