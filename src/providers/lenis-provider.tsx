"use client";

import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

type Props = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: Props) {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    // Improved RAF function with proper cleanup
    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    // Start the animation loop
    rafRef.current = requestAnimationFrame(raf);

    // Make lenis available globally
    window.lenis = lenis;

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return <>{children}</>;
}
