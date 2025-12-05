import { TESTIMONIALS } from "@/lib/endpoints";

import TestimonialsContent from "./content";
import { TestimonialsResponse } from "./types";

// ISR with 1 hour revalidation
export const revalidate = 3600;

// Get testimonials
async function getTestimonials() {
  try {
    const response = await fetch(`${process.env.API_URL}${TESTIMONIALS}`, {
      next: {
        revalidate,
        tags: ["testimonials"],
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: ${response.statusText}`);
    }

    const data: TestimonialsResponse = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return null;
  }
}

// Wrapper
export default async function TestimonialsWrapper() {
  const testimonials = await getTestimonials();

  // Graceful fallback
  if (!testimonials || testimonials.length === 0)
    return (
      <section className="flex min-h-[400px] items-center justify-center rounded-2xl">
        <div className="text-center">
          <h2 className="font-bebas text-primary-900 mb-2 text-4xl">
            Testimonials Coming Soon
          </h2>
          <p className="text-secondary-700">
            Check back later for our latest testimonials
          </p>
        </div>
      </section>
    );

  return <TestimonialsContent testimonials={testimonials} />;
}
