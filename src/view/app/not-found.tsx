import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-8">Halaman Tidak Ditemukan</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin telah
        dipindahkan atau dihapus.
      </p>
      <Button variant="link" className="text-lg group" asChild>
        <Link href="/">
          Kembali ke Beranda
          <ChevronRight
            className="ml-1 transition-transform duration-100 group-hover:translate-x-1"
            size={20}
          />
        </Link>
      </Button>
    </div>
  );
}
