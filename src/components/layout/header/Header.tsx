// src/components/layout/header/Header.tsx
"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter, usePathname } from "next/navigation";

const SearchBar = dynamic(() => import("./SearchBar"), {
  ssr: false,
  loading: () => (
    <div className="hidden md:flex items-center gap-2 opacity-50">
      <div className="h-9 w-40 rounded-md border border-border/40 bg-card/40 animate-pulse" />
      <div className="h-9 w-16 rounded-md border border-border/40 bg-card/40 animate-pulse" />
    </div>
  ),
});

const MobileSearchDialog = dynamic(() => import("./MobileSearchDialog"), {
  ssr: false,
  loading: () => (
    <div className="md:hidden h-10 w-10 rounded-md border border-border/40 bg-card/40 animate-pulse" />
  ),
});

const ModeToggle = dynamic(() => import("../../ModeToggle").then((mod) => ({ default: mod.ModeToggle })), {
  ssr: false,
  loading: () => <span className="h-10 w-10 rounded-md border border-border/40 bg-card/40 animate-pulse" />,
});

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
  loading: () => <span className="md:hidden h-10 w-10 rounded-md border border-border/40 bg-card/40 animate-pulse" />,
});

export default function Header() {
  const router = useRouter();
  const pathname = usePathname() || "/";

  const submitSearch = (q: string) => {
    const qenc = encodeURIComponent(q.trim());
    if (!qenc) return;
    router.push(`/search?q=${qenc}`);
  };

  // helper: aktif link kontrolü
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    // project alt sayfalarını da kapsasın istiyorsan startsWith kullan
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <header
      className="
        bg-my-primary
        sticky top-0 z-50
        text-my-primary-foreground
        border-b border-border/60 shadow-sm
        backdrop-blur supports-[backdrop-filter]:bg-my-primary
      "
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 text-white">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-md px-1"
        >
          Cemilenur Tanrıseven
        </Link>

        {/* Masaüstü menü */}
        <nav aria-label="Ana menü" className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={`transition-colors duration-200 underline-offset-4 ${isActive("/")
              ? "text-[#F87B1B] underline decoration-[#F87B1B] decoration-2"
              : "text-inherit hover:text-[#F87B1B] hover:underline hover:decoration-[#F87B1B] hover:decoration-2"
              }`}
          >
            Anasayfa
          </Link>

          <Link
            href="/about"
            aria-current={isActive("/about") ? "page" : undefined}
            className={`transition-colors duration-200 underline-offset-4 ${isActive("/about")
              ? "text-[#F87B1B] underline decoration-[#F87B1B] decoration-2"
              : "text-inherit hover:text-[#F87B1B] hover:underline hover:decoration-[#F87B1B] hover:decoration-2"
              }`}
          >
            Hakkımda
          </Link>

          <Link
            href="/project"
            aria-current={isActive("/project") ? "page" : undefined}
            className={`transition-colors duration-200 underline-offset-4 ${isActive("/project")
              ? "text-[#F87B1B] underline decoration-[#F87B1B] decoration-2"
              : "text-inherit hover:text-[#F87B1B] hover:underline hover:decoration-[#F87B1B] hover:decoration-2"
              }`}
          >
            Projeler
          </Link>

          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={`transition-colors duration-200 underline-offset-4 ${isActive("/contact")
              ? "text-[#F87B1B] underline decoration-[#F87B1B] decoration-2"
              : "text-inherit hover:text-[#F87B1B] hover:underline hover:decoration-[#F87B1B] hover:decoration-2"
              }`}
          >
            İletişim
          </Link>
        </nav>



        <div className="flex items-center gap-2">
          <SearchBar onSubmit={submitSearch} />
          <MobileSearchDialog onSubmit={submitSearch} />

          <ModeToggle />

          {/* Sadece mobilde görünen menü tetikleyicisi */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
