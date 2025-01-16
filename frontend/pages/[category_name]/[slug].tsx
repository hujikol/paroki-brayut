import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { posts, Post } from "@/lib/data";

export default function PostDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    if (slug) {
      const filteredPosts = posts.filter((post) => post.slug === slug);
      if (filteredPosts.length > 0) {
        setData(filteredPosts[0]);
      }
      setTimeout(function () {
        setLoading(false);
      }, 5000);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className='flex flex-col w-10/12 min-h-screen mt-24 mb-4 px-8 pt-20'>
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className='flex flex-col w-10/12 min-h-screen mt-24 mb-4 px-8 pt-20'>
        Post not found
      </div>
    );
  }

  return (
    <section className='flex flex-col w-10/12 min-h-screen mt-24 mb-4 px-8 pt-20'>
      <h1 className='text-2xl font-bold'>{data.title}</h1>
      <p className='text-sm text-gray-500'>{data.date}</p>
      <div className='mt-4'>{data.content}</div>
    </section>
  );
}
