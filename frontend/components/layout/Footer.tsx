import Image from "next/image";
import Link from "next/link";

import { SquareArrowOutUpRight } from "lucide-react";
import { Separator } from "@/components/common/Separator";

export default function Footer() {
  return (
    <footer className=' text-white mt-auto mb-4 pt-12 pb-8 bg-[#303F76] w-11/12 rounded-xl'>
      <div className='flex flex-row w-full justify-evenly'>
        {/* first col */}
        <div className='flex flex-col gap-3 ml-4 max-w-96'>
          <div className='flex flex-row gap-3 items-center'>
            <Image
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
              src='/logo.png'
              alt='Website Logo'
              width={54}
              height={54}
            />
            <h3 className='flex flex-col text-lg font-bold'>
              <span>Paroki Brayut</span>
              <span>Santo Yohanes Paulus II</span>
            </h3>
          </div>
          <address className='flex items-center not-italic'>
            Gereja Santo Yusuf Tambakrejo, Rejodani, Sariharjo, Ngaglik, Sleman,
            DIY 55581
            <Link href='https://maps.app.goo.gl/8depYRoLTyq5BZAS9'>
              <SquareArrowOutUpRight width={18} strokeWidth={1.5} />
            </Link>
          </address>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <span>Email</span>
              <Link
                href='mailto:sekpar.brayut@kas.id'
                className='animate-underline'
              >
                sekpar.brayut@kas.id
              </Link>
            </div>
            <div className='flex flex-row justify-between'>
              <span>Telepon</span>
              <span>(0274) 860-9221</span>
            </div>
          </div>
        </div>

        {/* second col */}
        <div className='flex flex-col gap-3 mx-12 max-w-96'>
          <h3 className='flex flex-col text-lg font-bold'>
            <span>Sekretariat Paroki Brayut</span>
            <span>Santo Yohanes Paulus II</span>
          </h3>
          <address className='flex items-center not-italic'>
            Jogopaten, Pandowoharjo, Sleman, Daerah Istimewa Yogyakarta 55581
            <Link href='https://maps.app.goo.gl/SNFkU9ANmMD2MPkCA'>
              <SquareArrowOutUpRight width={18} strokeWidth={1.5} />
            </Link>
          </address>
          <div>
            <h3 className='font-bold'>Jam Kerja</h3>
            <div className='flex flex-row justify-between'>
              <span>Senin s.d. Jumat</span>
              <span>08.00 s.d. 15.00 WIB</span>
            </div>
            <div className='flex flex-row justify-between'>
              <span>Sabtu</span>
              <span>08.00 s.d. 14.00 WIB</span>
            </div>
          </div>
        </div>

        {/* third col */}
        <div className='flex flex-col gap-3 mr-2 w-4/12'>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col w-full gap-3'>
              <h3 className='flex flex-col text-xl font-bold'>
                Donasi Pembangunan Gereja Santo Yohanes Paulus II
              </h3>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <span className='text-gray-300 font-medium'>
                    Bank Mandiri
                  </span>
                  <span className='font-bold'>137 - 00 - 1632682 - 5</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-300 font-medium'>Bank BRI</span>
                  <span className='font-bold'>7307 - 01 - 015723 - 53 - 5</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-300 font-medium'>Bank BCA</span>
                  <span className='font-bold'>846 - 703 - 0862</span>
                </div>
                <span className='italic'>
                  *A.n. PGPM Paroki Santo Yohanes Paulus II
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className='font-bold text-xl'>Narahubung</h3>
            <div className='flex flex-row justify-between'>
              <span>Bapak Marcus Budi Santosa</span>
              <Link
                href='https://wa.me/628121555752'
                className='animate-underline font-bold'
              >
                (+62) 812-1555-752
              </Link>
            </div>
            <div className='flex flex-row justify-between'>
              <span>Romo B. Hanjar Krisnawan, Pr</span>
              <Link
                href='https://wa.me/6281392434199'
                className='animate-underline font-bold'
              >
                (+62) 813-9243-4199
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Separator className='mt-6 mb-3' />
      {/* social media & copyright row*/}
      <div className='flex flex-col mx-auto text-center gap-3'>
        <div className='flex gap-6 justify-center mt-2'>
          <Link href='#' className='animate-underline'>
            <span>Instagram</span>
          </Link>
          <Link href='#' className='animate-underline'>
            <span>Youtube</span>
          </Link>
          <Link href='#' className='animate-underline'>
            <span>WhatsApp</span>
          </Link>
        </div>
        <p>© 2024 KOMSOS Paroki Brayut Santo Yohanes Paulus II</p>
      </div>
    </footer>
  );
}
