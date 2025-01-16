"use client";

import { useState, useEffect } from "react";
import { SkeletonCard } from "@/components/SkeletonCard";
import { posts, Post } from "@/lib/data";
import { toTittleCase } from "@/lib/utils";
import { Search } from "lucide-react";
import { PostCardHorizontal } from "@/components/PostCard";
import { Button } from "@/components/ui/button";

export default function Page({
  params,
}: {
  params: { category_name: string };
}) {
  const category_name = params.category_name ?? "";
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [categoryPosts, setCategoryPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(categoryPosts.length > 5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category_name.length > 0) {
      const filteredPosts = posts.filter((post) =>
        post.category.map((cat) => cat.toLowerCase().replace(" ", "-"))
      );
      setCategoryPosts(filteredPosts);
      setVisiblePosts(filteredPosts.slice(0, 5));
      setHasMore(filteredPosts.length > 5);
    }
    setTimeout(() => setLoading(false), 1000); // Simulate loading delay
  }, [category_name]);

  const loadMore = () => {
    const newVisiblePosts = categoryPosts.slice(0, visiblePosts.length + 5);
    setVisiblePosts(newVisiblePosts);
    setHasMore(newVisiblePosts.length < categoryPosts.length);
  };

  console.log("visiblePosts", visiblePosts);

  return (
    <section className='flex flex-col w-10/12 min-h-screen mt-24 mb-12 px-8 pt-20'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>
          {toTittleCase(category_name, "-")}
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

      {loading ? (
        <div className='flex flex-col gap-4'>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
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
      )}
    </section>
  );
}
