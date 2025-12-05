import { type Metadata } from "next";

import Quote from "../../_components/quote";
import SectionWrapper from "../../_components/section-wrapper";
import TiptapEditor from "./_components/tiptap-editor";

// Metadata
export const metadata: Metadata = {
  title: "Rich Text Editor | PPE Tools",
  description: "Convert rich text to JSON",
};

// Page
export default function EditorPage() {
  return (
    <SectionWrapper>
      {/* Quote */}
      <Quote quote="“Great ideas deserve great words — here's where they begin”" />

      {/* Title */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">
          Fresh Reads From Our Minds
        </h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          <span className="inline-block">
            Stay in the loop with insights, stories, and inspiration straight
            from our blog.
          </span>
        </p>
      </div>

      {/* Editor Component */}
      <TiptapEditor />
    </SectionWrapper>
  );
}
