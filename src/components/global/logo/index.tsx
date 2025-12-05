import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = {
  mode?: "light" | "dark";
  dimensions?: {
    width: number;
    height: number;
  };
  className?: string;
};
export default function Logo({ mode = "dark", dimensions, className }: Props) {
  return mode === "dark" ? (
    <Image
      src="/images/logo/dark.svg"
      width={dimensions?.width ?? 82}
      height={dimensions?.height ?? 30}
      priority
      alt="PPE Logo"
      className={cn(className)}
    />
  ) : (
    <Image
      src="/images/logo/light.svg"
      width={dimensions?.width ?? 82}
      height={dimensions?.height ?? 30}
      priority
      alt="PPE Logo"
      className={cn(className)}
    />
  );
}
