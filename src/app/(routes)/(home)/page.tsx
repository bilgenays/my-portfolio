// src/app/(routes)/(home)/page.tsx
import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero/HeroSection";

const SkillsSection = dynamic(() => import("./sections/SkillsSection"));
const ProjectsSection = dynamic(() => import("./sections/ProjectsSection"));
const ExperienceSection = dynamic(() => import("./sections/ExperienceSection"));
const ContactCTA = dynamic(() => import("./sections/ContactCTA"));

const SKILLS: { name: string; href: string }[] = [
  { name: "React", href: "https://react.dev" },
  { name: "Next.js", href: "https://nextjs.org" },
  { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  { name: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "Python", href: "https://www.python.org/" },
];

const PROJECTS = [
  {
    title: "Köpek Duygu Analizi Mobil Uygulaması",
    description:
      "React Native ile geliştirilmiş, köpeklerin yüz ifadelerini analiz ederek duygusal durumlarını tahmin eden bir mobil uygulama.",
  },
  {
    title: "Giysi Giydirme ve Renk Değiştirme Modeli",
    description:
      "Stable Diffusion tabanlı model; kullanıcıların seçtiği renklerle sanal mankenin kıyafet rengini değiştirir.",
  },
  {
    title: "Kişisel Web Sitesi",
    description: "React ile oluşturduğum kişisel portföy; mobil uyumlu ve performans odaklı.",
  },
  {
    title: "Web Tabanlı Test Sitesi",
    description:
      "Yazılım test senaryolarını uygulamaya ve değerlendirmeye olanak tanıyan web tabanlı test arayüzü.",
  },
  {
    title: "E-Ticaret Sitesi",
    description:
      "Ürün listeleme, kategori filtreleme ve sepet yönetimi özelliklerine sahip tam işlevli bir e-ticaret platformu.",
  },
  {
    title: "WhatsApp Konuşma Analizi Uygulaması",
    description:
      "WhatsApp konuşmalarını analiz eden, Java ve Python tabanlı, yapay zekâ destekli metin işleme ve görselleştirme özelliklerine sahip bir web uygulaması."

  }
];

export default function HomePage() {
  return (
    <main
      className="min-h-screen transition-all duration-300 ease-in-out overflow-x-hidden"
      style={
        {
          "--color-my-primary": "#fafafa",
          "--color-my-primary-foreground": "#111111",
        } as React.CSSProperties
      }
    >
      <div className="w-full max-w-6xl mx-auto px-6 py-16 overflow-x-hidden">

        <HeroSection />

        <SkillsSection skills={SKILLS} />

        <ProjectsSection projects={PROJECTS} />

        <ExperienceSection />

        <ContactCTA />

        <footer className="mt-12 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Cemilenur Tanrıseven — Tüm hakları saklıdır.</footer>
      </div>
    </main>
  );
}
