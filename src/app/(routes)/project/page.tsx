// src/app/(routes)/project/page.tsx
import React from "react";

type Post = {
  id: number | string;
  title: string;
  content: string;
};

export const revalidate = 3600;

async function getProjects(): Promise<Post[]> {
  const vercelHost = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? vercelHost ?? "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/project`, {
      next: { revalidate },
    });
    if (!res.ok) {
      console.error("Project API non-OK:", res.status, await res.text().catch(() => ""));
      return [];
    }
    return res.json();
  } catch (err) {
    console.error("Failed fetching project posts from", baseUrl, err);
    return [];
  }
}

const ProjectPage = async () => {
  const posts = await getProjects();

  return (
    <div className="container mx-auto py-10 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[--color-my-primary]">PROJELER</h1>
      <ul className="mt-8 space-y-6 md:space-y-8">
        {posts.map((post) => (
          <li key={post.id} className="rounded-2xl border border-border/40 bg-card/60 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="mb-2 text-xl md:text-2xl font-semibold text-[--color-my-primary]">{post.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPage;
