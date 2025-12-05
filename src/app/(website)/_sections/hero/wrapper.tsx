import { HERO } from "@/lib/endpoints";

import HeroContent from "./content";
import { HeroSlidesResponse } from "./types";

// ISR approach with revalidation on every 1 hour
export const revalidate = 3600;

// Get hero slides
async function getHeroSlides() {
  try {
    const res = await fetch(
      `${process.env.API_URL}${HERO}?page=1&page_size=3`,
      {
        next: {
          revalidate,
          tags: ["hero-slides"],
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch hero slides: ${res.statusText}`);
    }

    const data: HeroSlidesResponse = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("Hero slides fetch error", error);
    return null;
  }
}

export default async function HeroWrapper() {
  const slides = await getHeroSlides();

  // Graceful fallback
  if (!slides || slides.length === 0) {
    return (
      <section className="from-primary-400 to-primary-700 flex min-h-[calc(100vh-5.5rem)] min-w-full items-center justify-center rounded-2xl bg-gradient-to-b">
        <div className="text-primary-900 text-center">
          <h1 className="font-bebas mb-4 text-7xl font-bold tracking-wider">
            Welcome to PPE
          </h1>
          <p className="text-xl">Empowering Rotating Reliability</p>
        </div>
      </section>
    );
  }

  return <HeroContent slides={slides} />;
}
