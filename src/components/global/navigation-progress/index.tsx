"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Navigation completed - hide progress bar
    setLoading(false);
    setProgress(0);
  }, [pathname]);

  useEffect(() => {
    if (!loading) return;

    // Simulate progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) return prev; // Stop at 99%, complete on pathname change
        return prev + Math.random() * 10;
      });
    }, 200);

    // Cleanup
    return () => clearInterval(timer);
  }, [loading]);

  // Intercept link clicks to start loading
  useEffect(() => {
    function clickHandler(event: MouseEvent) {
      const target = event.target as HTMLAnchorElement;
      const link = target.closest("a");

      if (!link || !link.href) {
        return;
      }

      // Parse link URL to get pathname
      const linkUrl = new URL(link.href);
      const linkPathname = linkUrl.pathname;

      // Check if it's internal and not the same route
      const isInternal =
        link.hostname === window.location.hostname &&
        !link.target &&
        !link.href.includes("#");

      const isSameRoute = linkPathname === pathname;

      // Only show progress if internal and different route
      if (isInternal && !isSameRoute) {
        setLoading(true);
        setProgress(10);
      }
    }

    document.addEventListener("click", clickHandler);

    // Cleanup
    return () => document.removeEventListener("click", clickHandler);
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div
      className="bg-primary-600 fixed top-0 left-0 z-50 h-1 transition-all duration-300 ease-out"
      style={{ width: `${progress}%` }}
    />
  );
}
