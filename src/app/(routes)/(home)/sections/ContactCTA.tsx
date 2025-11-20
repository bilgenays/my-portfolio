"use client";

import { memo } from "react";
import dynamic from "next/dynamic";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";

const Button = dynamic(() => import("../../../../components/ui/button").then((mod) => mod.Button));

function ContactCTAComponent() {
  return (
    <section className="py-16">
      <div className="rounded-2xl p-6 bg-card/60 border border-border/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Birlikte harika şeyler inşa edebiliriz. 👇 Benimle iletişime geç!</h3>
            <p className="text-muted-foreground mt-2">
              Proje fikirlerinizi paylaşın veya bir görüşme ayarlayın — her zaman yeni işbirliklerine açığım.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 w-full text-center overflow-x-hidden">
            <a href="https://github.com/cemiletanriseven1" target="_blank" rel="noreferrer">
              <Button variant="ghost" asChild>
                <span className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> GitHub
                </span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer">
              <Button variant="ghost" asChild>
                <span className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> LinkedIn
                </span>
              </Button>
            </a>
            <a href="mailto:cemiletanriseven1@gmail.com">
              <Button variant="ghost" asChild>
                <span className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> E-posta
                </span>
              </Button>
            </a>
            <a href="https://www.instagram.com/cemiletanri7?igsh=dW5ucW9yeXg2cDJi" target="_blank" rel="noreferrer">
              <Button variant="ghost" asChild>
                <span className="inline-flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Instagram
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactCTAComponent);

