import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import ShareBtn from "@/components/global/share-btn";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_PLATFORMS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

import { NewEventDetailsResponse } from "../types";

// Props
type Props = {
  newEvent: NewEventDetailsResponse;
};

export default function CompanyNewsEventsDetailsContent({ newEvent }: Props) {
  return (
    <SectionWrapper className="sm:px-12 md:px-24 lg:px-42 xl:px-72">
      <div className="fade-in space-y-8">
        <div className="space-y-6">
          <h1 className="text-primary-950 font-bebas text-xl leading-relaxed tracking-wide sm:text-3xl">
            {newEvent.title}
          </h1>

          <div className="flex items-center justify-between">
            <span className="bg-primary-500 text-primary-900 rounded-full px-4 py-1 text-xs font-medium sm:text-sm">
              {newEvent.item_type}
            </span>
            <span className="text-secondary-750 text-xs font-medium sm:text-sm">
              {formatDate(newEvent.published_at)}
            </span>
          </div>
        </div>

        <figure className="relative aspect-[1150/580] w-full overflow-hidden rounded-lg">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${newEvent.main_image}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            alt={`${newEvent.title} - ${newEvent.item_type}`}
            placeholder="blur"
            blurDataURL="/images/products/placeholder.jpg"
            className="object-cover object-center"
          />
        </figure>

        <p className="text-secondary-850 w-full leading-relaxed font-medium tracking-wide whitespace-pre-wrap">
          {JSON.stringify(newEvent.long_description)}
        </p>

        <Separator className="bg-secondary-550 my-12 w-full" />

        <div className="flex flex-col items-center gap-3">
          <h3 className="font-medium">Share this post on</h3>
          <div className="flex items-center gap-1">
            {SOCIAL_PLATFORMS.map((platform, idx) => (
              <ShareBtn key={idx} idx={idx} platformUrl={platform.url}>
                {platform.icon}
              </ShareBtn>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
