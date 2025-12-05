/* eslint-disable @typescript-eslint/no-explicit-any */

import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";

import { cn } from "@/lib/utils";

// Props
interface Props {
  content: any; // The JSON content from Django
  className?: string;
}

export default function TiptapRenderer({ content, className = "" }: Props) {
  // Generate HTML from JSON
  const html = generateHTML(content, [
    StarterKit.configure({
      link: {
        openOnClick: true,
        HTMLAttributes: {
          class: "text-blue-600 hover:text-blue-800 underline",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
    }),
  ]);

  return (
    <div
      className={cn("ProseMirror", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
