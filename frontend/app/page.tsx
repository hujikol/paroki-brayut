import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center">
      <div className="relative w-full h-[100vh] mb-12">
        <Image
          src="/TestHeroImage.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center text-white">
          <div className="flex flex-col justify-center w-10/12 pl-8 h-full flex-wrap items-baseline">
            <span className="text-xl md:text-2xl pl-8 mb-4">
              Selamat datang di website resmi
            </span>
            <h1 className="text-xl md:text-6xl font-bold pl-8 mb-4">
              Paroki Brayut Santo Yohanes Paulus II
            </h1>
            <Button
              variant="link"
              size="lg"
              className="text-white text-lg group"
              asChild
            >
              <Link href="#">
                Sejarah Paroki
                <ChevronRight
                  className="ml-1 transition-transform duration-100 group-hover:translate-x-1"
                  size={20}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
