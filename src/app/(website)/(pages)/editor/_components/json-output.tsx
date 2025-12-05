"use client";

import { CopyCheckIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toastClasses } from "@/lib/constants";

interface JsonOutputProps {
  jsonOutput: string;
  onClose: () => void;
}

export default function JsonOutput({ jsonOutput, onClose }: JsonOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonOutput);
      setCopied(true);

      toast.success("Copied!", {
        description: "Content copied successfully.",
        ...toastClasses,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed!", {
        description: "Failed to copy to clipboard. Please try again.",
        ...toastClasses,
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([jsonOutput], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `rich-content-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Header */}
      <div className="from-primary-500 to-primary-400 flex items-center justify-between bg-gradient-to-r px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary-900 rounded-lg p-2">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-primary-900 text-xl font-bold">JSON Output</h2>
            <p className="text-primary-850 text-sm">
              Copy this and paste it into your Django admin JSONField
            </p>
          </div>
        </div>

        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="rounded-lg p-2 transition-colors"
          title="Close"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </div>

      {/* JSON Content */}
      <div className="p-6">
        <ScrollArea
          data-lenis-prevent
          className="max-h-72 overflow-auto rounded-md border"
        >
          <pre className="bg-secondary-500 text-secondary-850 rounded-lg p-6 font-mono text-sm">
            <code>{jsonOutput}</code>
          </pre>
        </ScrollArea>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-3">
          <PrimaryButton onClick={handleCopy} containerClassNames="w-full">
            {copied ? (
              <>
                <CopyCheckIcon />
                <p>Copied!</p>
              </>
            ) : (
              <>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy to Clipboard
              </>
            )}
          </PrimaryButton>

          <SecondaryButton onClick={handleDownload} title="Download JSON file">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </SecondaryButton>
        </div>

        {/* Info Box */}
        <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="flex gap-3">
            <svg
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="mb-1 font-semibold text-yellow-900">
                How to use in Django:
              </h3>
              <ol className="list-inside list-decimal space-y-1 text-sm text-yellow-800">
                <li>Copy the JSON above</li>
                <li>Go to Django Admin → Your Blog/Video</li>
                <li>Find the content JSONField</li>
                <li>Paste the JSON (it will be validated automatically)</li>
                <li>Save!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
