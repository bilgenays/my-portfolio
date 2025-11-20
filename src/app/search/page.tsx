// src/app/search/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

const PROJECTS = [
  { title: "Köpek Duygu Analizi Mobil Uygulaması", description: "React Native ile geliştirilmiş..." },
  { title: "Giysi Giydirme ve Renk Değiştirme Modeli", description: "Stable Diffusion tabanlı model..." },
  { title: "Kişisel Web Sitesi", description: "React ile oluşturulmuş portföy..." },
  { title: "Web Tabanlı Test Sitesi", description: "Test senaryolarını uygulayan web arayüzü..." },
  { title: "E-Ticaret Sitesi", description: "Tam işlevli e-ticaret platformu..." },
];

const SKILLS = [
  { name: "React" },
  { name: "Next.js" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "C#" },
  { name: "Python" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase() || "";

  const projectResults = PROJECTS.filter(p =>
    p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
  );

  const skillResults = SKILLS.filter(s =>
    s.name.toLowerCase().includes(q)
  );

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Arama sonuçları: &quot;{q}&quot;
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Projeler</h2>
        {projectResults.length ? (
          projectResults.map(p => (
            <div key={p.title} className="mb-2 p-3 border rounded-md hover:shadow-md">
              <h3 className="font-semibold">{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))
        ) : (
          <p>Hiç proje bulunamadı.</p>
        )}
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Yetenekler</h2>
        {skillResults.length ? (
          skillResults.map(s => <div key={s.name}>{s.name}</div>)
        ) : (
          <p>Hiç yetenek bulunamadı.</p>
        )}
      </section>
    </main>
  );
}
