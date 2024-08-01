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
      "OMK Paroki St. Yohanes Paulus II Brayut mengadakan kegiatan ziarah ke Taman Doa Maria Gantang, Magelang, Jawa Tengah...",
  },
  {
    category: "Warta Paroki",
    slug: "misa-lansia-paroki",
    title: "Misa Lansia Paroki St. Yohanes Paulus II Brayut",
    date: "Jumat 20 Mei 2022",
    content:
      "Telah dilaksanakan Misa untuk umat Lansia Paroki St. Yohanes Paulus II Brayut...",
  },
  {
    category: "Warta Paroki",
    slug: "perayaan-minggu-palma",
    title: "Perayaan Minggu Palma di Wilayah Tambakrejo",
    date: "Sabtu 9 April 2022",
    content:
      "Perayaan Minggu Palma di wilayah Tambakrejo dilaksanakan pada hari Sabtu...",
  },
  {
    category: "Renungan",
    slug: "renungan-hari-senin",
    title: "Renungan hari senin",
    date: "Senin 11 April 2022",
    content:
      "Perayaan Minggu Palma di wilayah Tambakrejo dilaksanakan pada hari Sabtu...",
  },
  // Add 7 more dummy posts here
];
