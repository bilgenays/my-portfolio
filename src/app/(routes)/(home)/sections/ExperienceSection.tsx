"use client";

import { memo } from "react";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.Card));
const CardHeader = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardHeader));
const CardTitle = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardTitle));
const CardContent = dynamic(() => import("../../../../components/ui/card").then((mod) => mod.CardContent));

function ExperienceSectionComponent() {
  return (
    <section className="py-16">
      <h3 className="text-2xl font-bold mb-6">Deneyim</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4">
          <CardHeader>
            <CardTitle>Technomedicare (Stajyer) — 07/2024 - 08/2024, Ankara</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Kulak ve soluk borusundaki hastalıkları tespit eden yapay zeka modeli geliştirdim.
            </p>
          </CardContent>
        </Card>

        <Card className="p-4">
          <CardHeader>
            <CardTitle>Pointo Teknoloji (Frontend Stajı) — 2024 Yaz & Uzun Dönem</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Front-end (React) geliştirmeleri yaptım, back-end ekibine de destek verdim.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default memo(ExperienceSectionComponent);

