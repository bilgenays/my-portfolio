import Image from "next/image";
import Link from "next/link";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";

import { Button } from "../ui/button";
import styles from "./HeroSection.module.css";

const HERO_IMAGE = {
  src: "/resim.webp",
  width: 288,
  height: 384,
  blurDataURL:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/ab0s+0AAAAASUVORK5CYII=",
  sizes: "(max-width: 768px) 60vw, 288px",
};

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia}>
        <div className={styles.heroFrame}>
          <Image
            src={HERO_IMAGE.src}
            alt="Cemilenur Tanrıseven portrait"
            width={HERO_IMAGE.width}
            height={HERO_IMAGE.height}
            className="object-cover w-full h-full"
            placeholder="blur"
            blurDataURL={HERO_IMAGE.blurDataURL}
            priority
            fetchPriority="high"
            sizes={HERO_IMAGE.sizes}
          />
        </div>
      </div>

      <div className={styles.heroCopy}>
        <h1 className={styles.heroTitle}>Merhaba, ben Cemilenur Tanrıseven.</h1>
        <p className={styles.heroLead}>
          Front-end geliştirici ve yazılım mühendisliği öğrencisiyim. Temiz kod, ölçeklenebilir tasarım ve kullanıcı
          deneyimine önem veriyorum.
        </p>
        <div className={styles.heroActions}>
          <Link href="/project">
            <Button asChild>
              <span className="inline-flex items-center gap-2">
                Projelerimi Gör <ExternalLink className="w-4 h-4" />
              </span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" asChild>
              <span>İletişime Geç</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

