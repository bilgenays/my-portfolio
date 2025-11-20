import Link from "next/link";
import Github from "lucide-react/dist/esm/icons/github";
import Instagram from "lucide-react/dist/esm/icons/instagram";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import { Button } from "../../ui/button";

export default function Footer() {
    return (
        <footer className="w-full bg-my-primary text-white overflow-x-hidden" data-testid="footer">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 px-6 py-6">
                <div className="text-center md:text-left space-y-2">
                    <Link href="/" className="text-2xl font-bold">
                        Cemilenur Tanrıseven
                    </Link>
                    <p className="text-sm/6 text-white/80">
                        Yazılım mühendisi. Üretmeyi, öğrenmeyi ve paylaşmayı seviyorum.
                    </p>
                </div>

                <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
                    <Link href="/" className="text-white/90 hover:underline underline-offset-4">Anasayfa</Link>
                    <Link href="/about" className="text-white/90 hover:underline underline-offset-4">Hakkımda</Link>
                    <Link href="/project" className="text-white/90 hover:underline underline-offset-4">Projeler</Link>
                    <Link href="/contact" className="text-white/90 hover:underline underline-offset-4">İletişim</Link>
                </nav>

                <div className="flex justify-center flex-wrap gap-2 mt-4 md:mt-0">
                    <a href="https://github.com/cemiletanriseven1" target="_blank" rel="noreferrer">
                        <Button variant="secondary" size="icon" aria-label="Github">
                            <Github className="h-5 w-5" aria-hidden />
                        </Button>
                    </a>
                    <a href="https://www.instagram.com/cemiletanri7?igsh=dW5ucW9yeXg2cDJi" target="_blank" rel="noreferrer">
                        <Button variant="secondary" size="icon" aria-label="Instagram">
                            <Instagram className="h-5 w-5" aria-hidden />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer">
                        <Button variant="secondary" size="icon" aria-label="Linkedin">
                            <Linkedin className="h-5 w-5" aria-hidden />
                        </Button>
                    </a>
                </div>
            </div>
        </footer>
    );
}
