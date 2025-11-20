"use client";

import { memo } from "react";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.Card));
const CardContent = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardContent));
const CardHeader = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardHeader));
const CardTitle = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardTitle));

type SkillsSectionProps = {
  skills: { name: string; href: string }[];
};

function SkillsSectionComponent({ skills }: SkillsSectionProps) {
  return (
    <section className="py-16">
      <h3 className="text-2xl font-bold mb-8">Teknik Yetenekler</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group"
            title={s.name}
          >
            <Card className="p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-base font-semibold">{s.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-[color:#F87B1B] mr-2 opacity-90 group-hover:shadow-[0_0_12px_rgba(248,123,27,0.15)]" />
                  <span className="text-sm">Detay için tıklayın</span>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}

export default memo(SkillsSectionComponent);

