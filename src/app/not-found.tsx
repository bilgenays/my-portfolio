// src/app/not-found.tsx
import React from "react";
import Link from "next/link";
import XCircle from "lucide-react/dist/esm/icons/x-circle";
import ArrowLeftRight from "lucide-react/dist/esm/icons/arrow-left-right";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 transition-all duration-300 ease-in-out bg-[color:var(--background)]">
      <div className="w-full max-w-3xl">
        <Card className="overflow-hidden bg-card/60 border border-border/30">
          <CardHeader className="px-8 py-8 bg-transparent">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[color:#F87B1B]/10 p-3">
                <XCircle className="w-10 h-10 text-[color:#F87B1B]" />
              </div>
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-[color:var(--color-my-primary-foreground)]">
                  Sayfa bulunamadı
                </CardTitle>
                <p className="mt-1 text-sm text-muted-foreground max-w-xl">
                  Aradığın sayfa taşınmış olabilir veya URL yanlış yazılmış olabilir.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-8 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-base text-[color:var(--color-my-primary-foreground)] mb-4">
                  İstersen ana sayfaya dönebilir ya da projelere göz atabilirsin. Hala bulamazsan
                  iletişime geç — yardımcı olmaktan memnuniyet duyarım.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link href="/" legacyBehavior>
                    <Button asChild>
                      <a className="inline-flex items-center gap-2">
                        <ArrowLeftRight className="w-4 h-4" /> Ana Sayfaya Dön
                      </a>
                    </Button>
                  </Link>

                  <Link href="/project" legacyBehavior>
                    <Button asChild>
                      <a className="inline-flex items-center gap-2">
                        Projeler <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </Link>

                  <Link href="/contact" legacyBehavior>
                    <Button variant="outline" asChild>
                      <a>İletişime Geç</a>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="min-w-[220px]">
                <div className="rounded-lg p-4 border border-border/20 bg-background/60 text-sm text-muted-foreground">
                  <strong className="block text-[color:var(--color-my-primary-foreground)] mb-2">
                    Hızlı ipuçları
                  </strong>
                  <ul className="list-inside list-disc space-y-1">
                    <li>URL’de yazım hatası var mı kontrol et.</li>
                    <li>Ana sayfada arama yapmayı dene.</li>
                    <li>Henüz eklemediğim bir içerikse iletişime geç.</li>
                  </ul>
                </div>
              </div>
            </div>

            <footer className="mt-6 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Cemilenur Tanrıseven — Sayfa bulunamadı uyarısı.
            </footer>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}