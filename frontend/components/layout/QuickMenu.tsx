import { Button } from "@components/common/Button";
import Link from "next/link";

export default function QuickMenu() {
  return (
    <section className='flex justify-between items-center absolute top-[97vh] w-8/12 -my-4 py-5 z-10 overflow-hidden backdrop-filter backdrop-blur-sm text-gray-800 rounded-xl bg-white/60 drop-shadow-md'>
      <ul className='flex gap-12 mx-auto items-center'>
        <li>
          <Button className='text-lg' variant='ghost' size='lg' asChild>
            <Link href='#'>Sejarah Paroki</Link>
          </Button>
        </li>
        <li>
          <Button className='text-lg' variant='ghost' size='lg' asChild>
            <Link href='#'>Warta Paroki</Link>
          </Button>
        </li>
        <li>
          <Button className='text-xl' size='xl' asChild>
            <Link href='#'>Jadwal Misa</Link>
          </Button>
        </li>
        <li>
          <Button className='text-lg' variant='ghost' size='lg' asChild>
            <Link href='#'>Dok. Sakramental</Link>
          </Button>
        </li>
        <li>
          <Button className='text-lg' variant='ghost' size='lg' asChild>
            <Link href='#'>Kontak Sekretariat</Link>
          </Button>
        </li>
      </ul>
    </section>
  );
}
