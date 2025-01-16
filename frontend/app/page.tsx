import Hero from "@/components/layout/Hero";
import Pembangunan from "@/components/layout/Pembangunan";
import PostFeed from "@/components/posts/PostFeed";
import QuickMenu from "@/components/layout/QuickMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <PostFeed />
      <Pembangunan />
    </>
  );
}
