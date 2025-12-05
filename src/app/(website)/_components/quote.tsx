import { cn } from "@/lib/utils";

type Props = {
  quote: string;
  className?: string;
};

export default function Quote({ quote, className }: Props) {
  return (
    <p
      className={cn(
        "bg-secondary-400 border-secondary-500 w-fit rounded-full border px-10 py-2 text-center text-xs font-medium italic shadow-sm shadow-black/5 sm:text-sm md:text-base",
        className,
      )}
    >
      {quote}
    </p>
  );
}
