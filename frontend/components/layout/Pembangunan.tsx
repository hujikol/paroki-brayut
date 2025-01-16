import Image from "next/image";
import { Progress } from "@/components/common/Progress";
import Link from "next/link";

export default function Pembangunan() {
  const terkumpul = 2613402473;
  const dibutuhkan = 9448100000;
  const dana = (terkumpul / dibutuhkan) * 100;
  return (
    <section className='relative w-11/12 h-[85vh] mb-12 rounded-xl'>
      <Image
        src='/GerejaTambakrejo.jpg'
        alt='Hero Image'
        layout='fill'
        objectFit='cover'
        priority
        className='rounded-xl'
      />
      <div className='absolute bg-gradient-to-b from-transparent to-black flex items-end w-full h-[85vh] rounded-xl'>
        <div className='flex justify-center p-16 gap-20 text-white'>
          <div className='w-2/3'>
            <div className='text-4xl font-bold mb-6'>Pembangunan Gereja</div>
            <div className='flex flex-col gap-3 mb-12'>
              <p>
                Kami umat di Paroki Santo Yohanes Paulus II Brayut, Slemat, DIY,
                merencanakan untuk mengembangkan Gereja Santo Yohanes Paulus II
                yang berada di Tambakrejo sebagai Gereja pusat yang lebih
                memadai dengan berbagai sarana yaitu, pastoran, taman doa,
                gedung pertemuan, dan ruang-ruang pelayanan bagi umat.
              </p>
              <p>
                Kami bersyukur atas perkenan-Nya, kami telah membeli tanah yang
                terletak di sebelah Gereja kami saat ini, dan dengan sedikit
                dana untuk melanjutkan pada tahap pembangunan gedung. Dengan
                rendah hati, kami mengetuk hati saudara-saudari para penderma
                dalam pembangunan Gereja pusat di paroki kami. Berkah Dalem.
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <span className='text-gray-300 font-medium'>Terkumpul</span>
                  <span className='font-bold'>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(terkumpul)}
                  </span>
                </div>
                <div className='flex flex-col'>
                  <span className='text-gray-300 font-medium'>
                    Total kebutuhan
                  </span>
                  <span className='font-bold'>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(dibutuhkan)}
                  </span>
                </div>
              </div>
              <Progress value={dana} />
            </div>
          </div>

          <div className='flex flex-col justify-end gap-3 mx-2 w-1/3'>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-col w-full gap-3'>
                <h3 className='flex flex-col text-xl font-bold'>
                  Donasi Pembangunan Gereja Santo Yohanes Paulus II
                </h3>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-col'>
                    <span className='text-gray-300 font-medium'>
                      Bank Mandiri
                    </span>
                    <span className='font-bold'>137 - 00 - 1632682 - 5</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-gray-300 font-medium'>Bank BRI</span>
                    <span className='font-bold'>
                      7307 - 01 - 015723 - 53 - 5
                    </span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-gray-300 font-medium'>Bank BCA</span>
                    <span className='font-bold'>846 - 703 - 0862</span>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-sm italic'>*Rekening Atas Nama</span>
                    <span className='text-sm italic'>
                      PGPM Paroki Santo Yohanes Paulus II
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <Image
                  src='/qr_code.png'
                  alt='QR Code'
                  className='mb-2'
                  width={260}
                  height={260}
                />
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
      </div>
    </section>
  );
}
