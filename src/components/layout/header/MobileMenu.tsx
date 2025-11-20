"use client";
import Link from "next/link";
import Menu from "lucide-react/dist/esm/icons/menu";
// @ alias yoksa:
import { Button } from "../../ui/button";
import {
    Sheet, SheetClose, SheetContent, SheetFooter,
    SheetHeader, SheetTitle, SheetTrigger,
} from "../../ui/sheet";

export default function MobileMenu() {
    return (
        <Sheet>
            {/* Yalnızca mobilde görünen buton */}
            <SheetTrigger asChild>
                <Button
                    variant="secondary"
                    size="icon"
                    className="md:hidden"
                    aria-label="Menüyü aç"
                >
                    <Menu className="h-6 w-6" aria-hidden />
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
                <SheetHeader>
                    <SheetTitle className="text-xl font-bold">
                        <Link href="/">Cemile&nbsp;Nur&nbsp;Tanrıseven</Link>
                    </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-4" aria-label="Mobil menü">
                    <SheetClose asChild>
                        <Link href="/" className="hover:underline underline-offset-4">Anasayfa</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/about" className="hover:underline underline-offset-4">Hakkımda</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/project" className="hover:underline underline-offset-4">Projeler</Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link href="/contact" className="hover:underline underline-offset-4">İletişim</Link>
                    </SheetClose>
                </nav>

                <SheetFooter className="mt-6">
                    <SheetClose asChild>
                        <Button className="w-full">Kapat</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
