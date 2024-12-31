"use client";

import { useState, useEffect } from "react";

import { posts, Post } from "@/lib/data";

export default function PostDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug ?? "";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Post>({
    slug: "",
    title: "",
    date: "",
    content: "",
    category: [""],
  });

  useEffect(() => {
    if (slug != "") {
      const filteredPosts = posts.filter((post) => post.slug === slug);
      if (filteredPosts.length > 0) {
        setData(filteredPosts[0]);
      }
    }
    setTimeout(() => setLoading(false), 1000); // Simulate loading delay
  }, [slug]);

  return (
    <section className='cflex flex-col w-10/12 min-h-screen mt-24 mb-4 px-8 pt-20'>
      {loading && <div>Loading...</div>}
      <div>
        <h1 className='text-2xl font-bold'>{data.title}</h1>
        <p className='text-sm text-gray-500'>{data.date}</p>
        <div className='mt-4'>{data.content}</div>
      </div>
    </section>
  );
}
