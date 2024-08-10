import { constants } from "buffer";

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  category: string;
}

export const posts: Post[] = [
  {
    category: "Warta Paroki",
    slug: "ziarah-omk-paroki-brayut",
    title: "Ziarah OMK Paroki Brayut ke Taman Doa Maria Gantang Paroki Brayut",
    date: "Minggu 23 Mei 2022",
    content:
      "OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah, OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah, OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah. OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah. OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah. OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah",
  },
  {
    category: "Warta Paroki",
    slug: "misa-lansia-paroki",
    title: "Misa Lansia Paroki St. Yohanes Paulus II Brayut",
    date: "Jumat 20 Mei 2022",
    content:
      "Telah dilaksanakan Misa untuk umat Lansia Paroki St. Yohanes Paulus II Brayut, OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah, OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah",
  },
  {
    category: "Warta Paroki",
    slug: "perayaan-minggu-palma",
    title: "Perayaan Minggu Palma di Wilayah Tambakrejo",
    date: "Sabtu 9 April 2022",
    content:
      "Perayaan Minggu Palma di wilayah Tambakrejo dilaksanakan pada hari Sabtu",
  },
  {
    category: "Warta Paroki",
    slug: "perayaan-minggu-palma",
    title: "Perayaan Minggu Palma di Wilayah Tambakrejo",
    date: "Sabtu 9 April 2022",
    content:
      "Perayaan Minggu Palma di wilayah Tambakrejo dilaksanakan pada hari Sabtu, OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah",
  },
  {
    category: "Warta Paroki",
    slug: "perayaan-minggu-palma",
    title: "Perayaan Minggu Palma di Wilayah Tambakrejo",
    date: "Sabtu 9 April 2022",
    content:
      "Perayaan Minggu Palma di wilayah Tambakrejo dilaksanakan pada hari Sabtu, OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah",
  },
  {
    category: "Warta Paroki",
    slug: "perayaan-minggu-palma",
    title: "Perayaan Minggu Palma di Wilayah Tambakrejo",
    date: "Sabtu 9 April 2022",
    content:
      "Perayaan Minggu Palma di wilayah Tambakrejo dilaksanakan pada hari Sabtu. OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah",
  },
  {
    category: "Warta Paroki",
    slug: "perayaan-minggu-palma",
    title: "Perayaan Minggu Palma di Wilayah Tambakrejo",
    date: "Sabtu 9 April 2022",
    content:
      "Perayaan Minggu Palma di wilayah Tambakrejo dilaksanakan pada hari Sabtu. OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah",
  },
  {
    category: "Renungan",
    slug: "renungan-hari-senin",
    title: "Renungan hari senin",
    date: "Senin 11 April 2022",
    content:
      "Perayaan Minggu Palma di wilayah Tambakrejo dilaksanakan pada hari Sabtu. OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah",
  },
];

export interface Category {
  slug: string;
  name: string;
}

export const categories: Category[] = [
  {
    slug: "warta-paroki",
    name: "Warta Paroki",
  },
  {
    slug: "renungan",
    name: "Renungan",
  },
  {
    slug: "artikel",
    name: "Artikel",
  },
];

export interface MenuData {
  title: string;
  href?: string;
  description?: string;
  children?: MenuData[];
}

export const menuData: MenuData[] = [
  {
    title: "Profil",
    children: [
      {
        title: "Sejarah Paroki",
        href: "/profil/sejarah-paroki",
        description: "Sejarah perjalanan terbentuknya Paroki Brayut",
      },
      {
        title: "Kepengurusan",
        href: "/profil/staff",
        description:
          "Pastor paroki, staff gereja, dan jajaran pengurus lainnya",
      },
    ],
  },
  {
    title: "Gereja",
    children: [
      {
        title: "Tambakrejo",
        href: "/gereja/tambakrejo",
        description: "Detail gereja tambakrejo",
      },
      {
        title: "SEO",
        href: "/services/seo",
        description: "Improving your website's visibility on search engines",
      },
    ],
  },
  {
    title: "Informasi",
    children: [
      {
        title: "Web Development",
        href: "/services/web-development",
        description: "Building modern and responsive websites",
      },
      {
        title: "SEO",
        href: "/services/seo",
        description: "Improving your website's visibility on search engines",
      },
      {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "Promoting your business through digital channels",
      },
    ],
  },
];
