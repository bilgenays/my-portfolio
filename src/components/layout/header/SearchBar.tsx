"use client";

import { useState } from "react";
import Search from "lucide-react/dist/esm/icons/search";

import { Button } from "../../ui/button";

type SearchBarProps = {
  onSubmit: (value: string) => void;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="hidden md:flex items-center gap-2">
      <div className="flex items-center bg-card/40 border border-border/30 rounded-md px-2 py-1 transition-all duration-200">
        <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
        <label htmlFor="header-search" className="sr-only">
          Site içinde ara
        </label>
        <input
          id="header-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit(query);
          }}
          placeholder="Ara..."
          className="ml-2 w-40 bg-transparent text-sm placeholder:opacity-60 outline-none text-[color:var(--color-my-primary-foreground)]"
          aria-label="Ara"
        />
      </div>

      <Button
        variant="secondary"
        size="sm"
        onClick={() => onSubmit(query)}
        aria-label="Aramayı başlat"
      >
        Ara
      </Button>
    </div>
  );
}

