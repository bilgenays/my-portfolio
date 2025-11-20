"use client";

import { memo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "../../../../components/ui/button";

const Card = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.Card));
const CardContent = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardContent));

type ProjectsSectionProps = {
  projects: { title: string; description: string }[];
};

function ProjectsSectionComponent({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Projelerim</h3>
        <Link href="/project">
          <Button asChild>
            <span>Tüm Projelere Git</span>
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="p-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:border-[color:#F87B1B]">
            <CardContent>
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-muted-foreground mb-4">{p.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default memo(ProjectsSectionComponent);

