import Image from "next/image";

export default function Hero() {
  return (
    <section className='flex relative w-11/12 h-[85vh] mt-24 mb-12 flex-col items-center rounded-xl'>
      <Image
        src='/TestHeroImage.jpg'
        alt='Hero Image'
        layout='fill'
        objectFit='cover'
        priority
        className='rounded-xl'
      />
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center text-white rounded-xl'>
        <div className='flex flex-col justify-center items-center w-10/12 pl-8 h-full flex-wrap'>
          <span className='text-xl md:text-2xl mb-2'>
            Selamat datang di website resmi
          </span>
          <h1 className='text-xl md:text-6xl tracking-tight font-bold'>
            Paroki Brayut Santo Yohanes Paulus II
          </h1>
        </div>
      </div>
    </section>
  );
}
