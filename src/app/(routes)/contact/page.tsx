// src/app/contact/page.tsx
"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Mail from "lucide-react/dist/esm/icons/mail";
import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Instagram from "lucide-react/dist/esm/icons/instagram";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import type ReCAPTCHAComponent from "react-google-recaptcha";
import type { ComponentProps } from "react";

type ReCAPTCHAProps = ComponentProps<typeof ReCAPTCHAComponent>;

const ReCAPTCHA = dynamic<ReCAPTCHAProps>(() => import("react-google-recaptcha"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden
      className="mt-4 h-[78px] w-full rounded-md border border-border/30 bg-muted animate-pulse"
    />
  ),
});

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [status, setStatus] = useState<null | "idle" | "sending" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const validateEmail = (e: string) => /\S+@\S+\.\S+/.test(e);

  const resetStatusLater = (ms = 3000) =>
    setTimeout(() => setStatus("idle"), ms);

  // API GÖNDERİMİ
  const sendViaApi = async () => {
    if (!validateEmail(email)) {
      setStatus("error");
      setNotice("Lütfen geçerli bir e-posta adresi girin.");
      resetStatusLater();
      return;
    }
    if (!messageText.trim()) {
      setStatus("error");
      setNotice("Lütfen mesaj alanını doldurun.");
      resetStatusLater();
      return;
    }

    if (!captchaToken) {
      setStatus("error");
      setNotice("Lütfen robot olmadığınızı doğrulayın.");
      resetStatusLater();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: messageText, captchaToken }),
      });

      if (!res.ok) throw new Error("Gönderim başarısız");

      setStatus("sent");
      setNotice("Teşekkürler! Mesajınız alındı.");
      setEmail("");
      setMessageText("");
      setCaptchaToken(null);
      resetStatusLater(4000);

    } catch {
      setStatus("error");
      setNotice("Gönderim sırasında hata oluştu.");
      resetStatusLater();
    }
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    sendViaApi();
  };

  return (
    <main className="min-h-screen transition-all duration-300 ease-in-out">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-6">
        <h1 className="text-3xl font-bold">İletişim</h1>
        <p className="text-muted-foreground">
          Birlikte harika şeyler inşa edebiliriz.👇 Benimle iletişime geç!
        </p>

        <Card className="p-6 bg-card/60 border border-border/30">
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">

              {/* --- E-POSTA --- */}
              <label htmlFor="email" className="block text-sm font-medium">
                E-posta
              </label>
              <input
                id="email"
                type="email"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border/30 bg-background/70 px-3 py-2 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#F87B1B]/30"
              />

              {/* --- MESAJ --- */}
              <label htmlFor="message" className="block text-sm font-medium">
                Mesaj
              </label>
              <textarea
                id="message"
                placeholder="Mesajınızı buraya yazın..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                rows={6}
                className="w-full rounded-md border border-border/30 bg-background/70 px-3 py-2 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-[#F87B1B]/30 resize-vertical"
              />

              {/* --- CAPTCHA --- */}
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={(token: string | null) => setCaptchaToken(token)}
                className="mt-4"
                aria-hidden="true"
                style={{ maxWidth: "100%" }}
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Button
                  type="submit"
                  className="bg-[#F87B1B] hover:bg-[#ff8f3a] text-white"
                  aria-label="Mesajı Gönder"
                >
                  {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
                </Button>

                <div className="text-sm text-muted-foreground">
                  veya doğrudan:{" "}
                  <a
                    href="mailto:cemiletanriseven31@gmail.com"
                    className="text-[#F87B1B] underline"
                  >
                    cemiletanriseven31@gmail.com
                  </a>
                </div>
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">{notice}</p>
              )}

              {status === "sent" && (
                <p className="text-sm text-green-500">{notice}</p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* --- SOSYAL MEDYA --- */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold items-center">Sosyal Medya</h2>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a href="https://github.com/cemiletanriseven1" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                aria-label="GitHub"
                className="group flex items-center gap-2 hover:text-[#F87B1B] transition-colors"
              >
                <Github className="w-5 h-5 group-hover:text-[#F87B1B]" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </a>

            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                aria-label="LinkedIn"
                className="group flex items-center gap-2 hover:text-[#F87B1B] transition-colors"
              >
                <Linkedin className="w-5 h-5 group-hover:text-[#F87B1B]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Button>
            </a>

            <a href="https://www.instagram.com/cemiletanri7" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                aria-label="Instagram"
                className="group flex items-center gap-2 hover:text-[#F87B1B] transition-colors"
              >
                <Instagram className="w-5 h-5 group-hover:text-[#F87B1B]" />
                <span className="hidden sm:inline">Instagram</span>
              </Button>
            </a>

            <a href="mailto:cemiletanriseven31@gmail.com">
              <Button
                variant="ghost"
                aria-label="E-posta Gönder"
                className="group flex items-center gap-2 hover:text-[#F87B1B] transition-colors"
              >
                <Mail className="w-5 h-5 group-hover:text-[#F87B1B]" />
                <span className="hidden sm:inline">E-posta</span>
              </Button>
            </a>
          </div>
        </section>

        <footer className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cemilenur Tanrıseven — Tüm hakları saklıdır.
        </footer>
      </div>
    </main>
  );
}
