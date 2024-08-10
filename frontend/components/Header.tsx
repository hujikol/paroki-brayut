import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  return (
    <nav className="flex flex-row justify-between items-center w-10/12 mt-4 pl-8 pr-12 py-5 top-0 z-20 overflow-x-hidden backdrop-filter backdrop-blur-sm text-gray-800 fixed  rounded-xl bg-white/60 drop-shadow-md">
      {/* Logo and web title */}
      <Link href="/" passHref>
        <div className="flex flex-row gap-3 cursor-pointer">
          <Image
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="/logo.png"
            alt="Website Logo"
            width={54}
            height={54}
          />
          <div className="flex flex-col font-bold">
            <span>Paroki Brayut</span>
            <span>Santo Yohanes Paulus II</span>
          </div>
        </div>
      </Link>

      <Menu />
    </nav>
  );
}
