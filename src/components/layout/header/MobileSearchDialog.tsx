"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../ui/dialog";
import { Button } from "../../ui/button";
import Search from "lucide-react/dist/esm/icons/search";

type MobileSearchDialogProps = {
  onSubmit: (value: string) => void;
};

export default function MobileSearchDialog({ onSubmit }: MobileSearchDialogProps) {
  const [mobileQuery, setMobileQuery] = useState("");

  return (
    <div className="md:hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button aria-label="Mobil arama" variant="secondary" size="icon">
            <Search className="h-5 w-5" aria-hidden />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Site içinde ara</DialogTitle>
            <DialogDescription>Aramak için bir kelime veya cümle yaz.</DialogDescription>
          </DialogHeader>

          <div className="mt-3 flex w-full items-center gap-2">
            <input
              autoFocus
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSubmit(mobileQuery);
                }
              }}
              placeholder="Ara..."
              className="w-full rounded-md border border-border/30 bg-background/70 px-3 py-2 text-[color:var(--color-my-primary-foreground)] outline-none"
            />
            <Button
              onClick={() => onSubmit(mobileQuery)}
              variant="secondary"
              size="sm"
            >
              Ara
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

