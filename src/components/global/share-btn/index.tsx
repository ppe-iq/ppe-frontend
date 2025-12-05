"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
  idx: number;
  platformUrl: string;
};
export default function ShareBtn({ children, idx, platformUrl }: Props) {
  // Pathname
  const pathname = usePathname();

  // Copy to clipboard
  function copyToClipboard() {
    navigator.clipboard.writeText(`https://ppe-iq.com${pathname}`);
    toast.success("Link copied to clipboard", {
      description: "Redirecting to the platform...",
    });

    window.open(platformUrl, "_blank");
  }
  return (
    <Button key={idx} onClick={copyToClipboard} variant="ghost" size="icon">
      {children}
    </Button>
  );
}
