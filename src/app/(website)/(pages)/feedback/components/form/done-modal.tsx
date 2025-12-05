import { CheckIcon } from "lucide-react";
import { toast } from "sonner";

import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Props
type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};
export default function DoneModal({ isOpen, onOpenChange }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-secondary-400 border-secondary-500 flex w-full max-w-sm flex-col items-center justify-center gap-8 overflow-hidden border p-0 sm:max-w-[600px]">
        <div className="bg-primary-450 text-primary-700 mt-5 grid size-12 place-items-center rounded-full">
          <CheckIcon />
        </div>

        <DialogHeader className="items-center gap-1 px-4">
          <DialogTitle className="font-bebas from-primary-850 via-primary-800 to-primary-750 bg-gradient-to-r bg-clip-text text-3xl font-medium tracking-wider text-transparent">
            Thank You For Your Feedback!
          </DialogTitle>
          <DialogDescription className="text-secondary-800 text-center">
            We truly appreciate you taking the time to share your thoughts. Your
            input helps us grow and continue delivering meaningful learning
            experiences.
          </DialogDescription>
        </DialogHeader>

        <div className="border-secondary-500 bg-secondary-450 flex w-full items-center gap-2 space-x-4 border-t p-2">
          <PrimaryButton
            onClick={() => {
              navigator.clipboard.writeText("https://ppe-iq.com/feedback");
              toast.success("Link copied to clipboard", {
                description:
                  "Share it with them and let us know their opinion of us.",
              });

              onOpenChange(false);
            }}
            containerClassNames="flex-1"
          >
            Invite Friend
          </PrimaryButton>
          <SecondaryButton onClick={() => onOpenChange(false)}>
            Close
          </SecondaryButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
