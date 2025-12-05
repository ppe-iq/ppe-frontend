import React from "react";

import PrimaryButton from "@/components/global/button/primary-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Props
type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  linkText: string;
  setLinkText: (text: string) => void;
  onSave: () => void;
  onRemove: () => void;
  children: React.ReactNode;
};

export function EditorLinkPopover({
  isOpen,
  setIsOpen,
  linkText,
  setLinkText,
  onSave,
  onRemove,
  children,
}: Props) {
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80" align="start">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Insert Link</h4>
            <p className="text-muted-foreground text-sm">
              Enter the URL you want to link to
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={linkText}
                onChange={(e) => setLinkText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onSave();
                  }
                  if (e.key === "Escape") {
                    e.preventDefault();
                    setIsOpen(false);
                  }
                }}
                autoFocus
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PrimaryButton
              type="button"
              size="sm"
              onClick={onSave}
              containerClassNames="flex-1"
              className="h-8 text-sm"
            >
              Save
            </PrimaryButton>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={onRemove}
              className="flex-1"
            >
              Remove
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
