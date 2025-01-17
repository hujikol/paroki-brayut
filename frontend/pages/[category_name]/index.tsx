import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { SkeletonCard } from "@/components/common/SkeletonCard";
import { posts, Post, categories } from "@/lib/data";
import { toTittleCase } from "@/lib/utils";
import { Search } from "lucide-react";
import { PostCardHorizontal } from "@/components/posts/PostCard";
import { Button } from "@/components/common/Button";

import NotFound from "@/pages/404";

export default function Page({}: { params: { category_name: string } }) {
  const router = useRouter();
  const { category_name } = router.query;
  const category_list = categories.map((cat) => cat.slug);

  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [categoryPosts, setCategoryPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(categoryPosts.length > 5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category_name) {
      const filteredPosts = posts.filter((post) =>
        post.category
          .map((cat) => cat.toLowerCase().replace(" ", "-"))
          .includes(category_name as string)
      );
      setCategoryPosts(filteredPosts);
      setVisiblePosts(filteredPosts.slice(0, 5));
      setHasMore(filteredPosts.length > 5);
      setTimeout(() => setLoading(false), 1000); // Simulate loading delay
    }
  }, [category_name]);

  const loadMore = () => {
    const newVisiblePosts = categoryPosts.slice(0, visiblePosts.length + 5);
    setVisiblePosts(newVisiblePosts);
    setHasMore(newVisiblePosts.length < categoryPosts.length);
  };

  if (!category_list.includes(category_name as string)) {
    return <NotFound />;
  }

  if (categoryPosts.length === 0) {
    return (
      <div className='flex flex-col w-10/12 min-h-screen mt-24 mb-4 px-8 pt-20'>
        <h2 className='text-xl'>Belum terdapat artikel</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='flex flex-col w-10/12 min-h-screen mt-24 mb-4 px-8 pt-20 gap-4'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <section className='flex flex-col w-10/12 min-h-screen mt-24 mb-12 px-8 pt-20'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>
          {toTittleCase(category_name as string, "-")}
        </h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Cari artikel...'
            className='w-full pl-4 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <Search
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400'
            size={20}
          />
        </div>
      </div>

      <div className='flex flex-col gap-4 w-full'>
        {visiblePosts.map((post: Post) => (
          <div key={post.slug}>
            <PostCardHorizontal post={post} category={post.category} />
          </div>
        ))}

        {hasMore && (
          <Button
            onClick={loadMore}
            className='mt-4 mx-auto px-6 py-4 bg-[#6E90C9] text-white hover:bg-[#2F5391] transition duration-300'
          >
            Muat Lebih Banyak
          </Button>
        )}
      </div>
    </section>
  );
}
