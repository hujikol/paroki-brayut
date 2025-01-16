import Hero from "@/components/layout/Hero";
import PostFeed from "@/components/posts/PostFeed";
import Pembangunan from "@/components/layout/Pembangunan";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda - Paroki Brayut</title>
        <meta
          name='description'
          content='Selamat datang di website resmi Paroki Brayut St. Yohanes Paulus II'
        />
      </Head>
      <Hero />
      <PostFeed />
      <Pembangunan />
    </>
  );
}
