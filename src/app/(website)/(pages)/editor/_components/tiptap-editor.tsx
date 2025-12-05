"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

import PrimaryButton from "@/components/global/button/primary-button";

import JsonOutput from "./json-output";
import Toolbar from "./toolbar";

export default function TiptapEditor() {
  const [showJson, setShowJson] = useState<boolean>(false);
  const [jsonOutput, setJsonOutput] = useState<string>("");
  const [generate, setGenerate] = useState<boolean>(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        link: {
          openOnClick: true,
          HTMLAttributes: {
            class: "text-blue-600 underline cursor-pointer",
          },
        },
      }),
      Placeholder.configure({
        placeholder:
          "Start typing your content here... You can use markdown shortcuts!",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[400px] px-6 py-4 pt-0",
      },
    },
    content: "",
    immediatelyRender: false,
  });

  const handleGenerateJson = () => {
    if (!editor) return;

    const json = editor.getJSON();
    const formattedJson = JSON.stringify(json, null, 2);
    setGenerate(true);
    setJsonOutput(formattedJson);
    setShowJson(true);

    setTimeout(() => {
      setGenerate(false);
    }, 2000);
  };

  if (!editor) {
    return (
      <div className="">
        <div className="border-b-primary-700 border-t-primary-850 mx-auto h-12 w-12 animate-spin rounded-full border-t-2 border-b-2"></div>
        <p className="mt-4 text-gray-600">Loading editor...</p>
      </div>
    );
  }

  return (
    <div className="bg-secondary-400 w-full space-y-6 overflow-hidden rounded-2xl border border-gray-200">
      {/* Toolbar */}
      <div className="border-b border-gray-200 bg-gray-50">
        <Toolbar editor={editor} />
      </div>

      {/* Editor Content */}
      <div className="bg-white">
        <EditorContent editor={editor} />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-4">
        <div className="flex items-center gap-4">
          <PrimaryButton onClick={handleGenerateJson}>
            {generate ? (
              <CheckIcon />
            ) : (
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            )}
            {generate ? "Generated!" : "Generate JSON"}
          </PrimaryButton>
        </div>
      </div>

      {/* JSON Output */}
      {showJson && (
        <JsonOutput
          jsonOutput={jsonOutput}
          onClose={() => setShowJson(false)}
        />
      )}
    </div>
  );
}
