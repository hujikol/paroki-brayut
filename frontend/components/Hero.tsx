import Image from "next/image";

export default function Hero() {
  return (
    <section className='flex min-h-screen w-full flex-col items-center'>
      <div className='relative w-full h-[100vh]'>
        <Image
          src='/TestHeroImage.jpg'
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center text-white'>
          <div className='flex flex-col justify-center items-center w-10/12 pl-8 h-full flex-wrap'>
            <span className='text-xl md:text-2xl mb-2'>
              Selamat datang di website resmi
            </span>
            <h1 className='text-xl md:text-6xl tracking-tight font-bold'>
              Paroki Brayut Santo Yohanes Paulus II
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
