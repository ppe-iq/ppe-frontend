import { Suspense } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import AllServicesContent from "./content";
import { ServiceType } from "./types";

// Wrapper
export default function AllServicesWrapper() {
  return (
    <Suspense fallback={<AllServicesSkeleton />}>
      <AllServicesContentWrapper />
    </Suspense>
  );
}

// Content Wrapper
async function AllServicesContentWrapper() {
  // TODO: Get all services
  const services: ServiceType[] = [
    {
      id: "1",
      slug: "vibration-analysis",
      imgUrl: "/images/services/vibration-analysis.jpg",
      title: "Vibration Analysis",
      description:
        "Identify hidden faults before they escalate. PPE's vibration analysis service provides early detection of imbalance, misalignment, and bearing defects to keep your machinery running smoothly.",
    },
    {
      id: "2",
      slug: "laser-alignment",
      imgUrl: "/images/services/laser-alignment.jpg",
      title: "Laser Alignment",
      description:
        "Achieve precise shaft and coupling alignment with PPE's advanced laser technology. Reduce wear, extend machine life, and improve energy efficiency with pinpoint accuracy.",
    },
    {
      id: "3",
      slug: "in-site-balancing",
      imgUrl: "/images/services/in-site-balancing.jpg",
      title: "In-Site Balancing",
      description:
        "Minimize downtime with PPE's on-site balancing service. We restore rotating equipment to optimal balance, reducing vibration, noise, and premature component failure directly at your facility.",
    },
    {
      id: "4",
      slug: "motion-amplification",
      imgUrl: "/images/services/motion-amplification.webp",
      title: "Motion Amplification",
      description:
        "See what the naked eye can't. PPE's motion amplification technology visually magnifies vibration and structural movement, helping you pinpoint issues faster and make data-driven decisions.",
    },
  ];

  return <AllServicesContent services={services} />;
}

// Skeleton
function AllServicesSkeleton() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="space-y-1">
        <Skeleton className="bg-secondary-550 h-4 w-24 rounded-full" />
        <Skeleton className="bg-secondary-550 h-3 w-44 rounded-full" />
      </div>

      <div className="grid gap-2 md:grid-cols-2 2xl:grid-cols-3">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className="bg-secondary-550 h-44 w-full rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
