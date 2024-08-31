import { posts } from "@/lib/data";
import { PostCardVertical } from "./PostCard";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PostFeed() {
  const firstThreePosts = posts.slice(0, 5);

  return (
    <section className='w-11/12 mb-12 px-6 py-16'>
      <div className='flex flex-row w-full mb-12 items-center'>
        <h3 className='text-4xl w-full font-bold'>Warta Terkini</h3>
        <Link href='#'>
          <Button className='px-6 py-4 bg-[#6E90C9] text-white hover:bg-[#2F5391] transition duration-300'>
            Selengkapnya
          </Button>
        </Link>
      </div>
      <div className='flex w-full mx-auto gap-6 justify-center'>
        {firstThreePosts.map((post) => (
          <div key={post.title}>
            <PostCardVertical post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
