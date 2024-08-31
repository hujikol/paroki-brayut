"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-row justify-between items-center w-full px-24 py-5 top-0 z-20
     text-gray-800 fixed transition-all ease-in-out duration-500
    ${
      isScrolled
        ? "bg-white/60 backdrop-filter backdrop-blur-sm"
        : "bg-[#FBF8F4]"
    }`}
    >
      {/* Logo and web title */}
      <Link href='/' passHref>
        <div className='flex flex-row gap-3 cursor-pointer'>
          <Image
            className='h-12 w-12 flex-none rounded-full bg-gray-50'
            src='/logo.png'
            alt='Website Logo'
            width={54}
            height={54}
          />
          <div className='flex flex-col font-bold'>
            <span>Paroki Brayut</span>
            <span>Santo Yohanes Paulus II</span>
          </div>
        </div>
      </Link>

      <Menu />
      <Button className='px-6' asChild>
        <Link href='#'>Jadwal Misa</Link>
      </Button>
    </nav>
  );
}
