import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Instagram, MessageSquareText, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className={cn("w-full text-white py-8", "bg-[#303F76]", "mt-auto")}>
      <div className="flex flex-row justify-evenly">
        {/* first col */}
        <div className="flex flex-col gap-3 ml-12 max-w-96">
          <div className="flex flex-row gap-3 items-center">
            <Image
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="/logo.png"
              alt="Website Logo"
              width={54}
              height={54}
            />
            <h3 className="flex flex-col text-lg font-bold">
              <span>Paroki Brayut</span>
              <span>Santo Yohanes Paulus II</span>
            </h3>
          </div>
          <Link
            href="https://maps.app.goo.gl/8depYRoLTyq5BZAS9"
            className="hover:underline"
          >
            <address className="not-italic">
              Gereja Santo Yusuf Tambakrejo, Rejodani 1, Sariharjo, Ngaglik,
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
            </address>
          </Link>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <span>Email</span>
              <Link
                href="mailto:sekpar.brayut@kas.id"
                className="hover:underline"
              >
                sekpar.brayut@kas.id
              </Link>
            </div>
            <div className="flex flex-row justify-between">
              <span>Telepon</span>
              <span>(0274) 860-9221</span>
            </div>
          </div>
        </div>

        {/* second col */}
        <div className="flex flex-col gap-3 mx-12 max-w-96">
          <h3 className="flex flex-col text-lg font-bold">
            <span>Sekretariat Paroki Brayut</span>
            <span>Santo Yohanes Paulus II</span>
          </h3>
          <Link
            href="https://maps.app.goo.gl/SNFkU9ANmMD2MPkCA"
            className="hover:underline"
          >
            <address className="not-italic">
              Jogopaten, Pandowoharjo, Kec. Sleman, Kabupaten Sleman, Daerah
              Istimewa Yogyakarta 55581
            </address>
          </Link>
          <div>
            <h3 className="font-bold">Jam Kerja</h3>
            <div className="flex flex-row justify-between">
              <span>Senin s.d. Jumat</span>
              <span>08.00 s.d. 15.00 WIB</span>
            </div>
            <div className="flex flex-row justify-between">
              <span>Sabtu</span>
              <span>08.00 s.d. 14.00 WIB</span>
            </div>
          </div>
        </div>

        {/* third col */}
        <div className="flex flex-col gap-3 mr-12 w-3/12">
          <h3 className="flex flex-col text-lg font-bold">
            <span>Donasi Pembangunan Gereja</span>
            <span>Santo Yohanes Paulus II</span>
          </h3>
          <div className="flex flex-row gap-4">
            <div>
              <Image
                src="/qr_code.png"
                alt="QR Code"
                className="mb-2"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>A.n. PGPM Paroki Santo Yohanes Paulus II</p>
              <div>
                <b>Bank Mandiri KCP Sleman</b>
                <p>No. Rek. 137-00-1632682-5</p>
              </div>
              <div>
                <b>Bank BRI Unit Palagan</b>
                <p>No. Rek. 7307-01-015723-53-5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* social media & copyright row*/}
      <div className="flex flex-col mx-auto text-center mt-4 gap-3">
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#">
            <Instagram className="icon" />
          </a>
          <a href="#">
            <Youtube className="icon" />
          </a>
          <a href="#">
            <MessageSquareText className="icon" />
          </a>
        </div>
        <p>© 2023 KOMSOS Paroki Brayut Santo Yohanes Paulus II</p>
      </div>
    </footer>
  );
}
