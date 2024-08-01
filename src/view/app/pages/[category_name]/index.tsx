import { GetStaticPaths, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import { posts, Post } from "@/lib/data";
import { slugify } from "@/utils/slugify";
import Skeleton from "@/components/Skeleton";

interface CategoryPageProps {
  categoryPosts: Post[];
}

export default function CategoryPage({ categoryPosts }: CategoryPageProps) {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>(
    categoryPosts.slice(0, 5)
  );
  const [hasMore, setHasMore] = useState(categoryPosts.length > 5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading delay
  }, []);

  const loadMore = () => {
    const newVisiblePosts = categoryPosts.slice(0, visiblePosts.length + 5);
    setVisiblePosts(newVisiblePosts);
    setHasMore(newVisiblePosts.length < categoryPosts.length);
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="container mx-auto p-4">
      {visiblePosts.map((post: Post) => (
        <div key={post.slug} className="mb-4">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
      {hasMore && (
        <button onClick={loadMore} className="mt-4 p-2 bg-blue-500 text-white">
          Muat Lebih Banyak
        </button>
      )}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = Array.from(
    new Set(posts.map((post) => slugify(post.category)))
  );
  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoryPosts = posts.filter(
    (post) => slugify(post.category) === params?.category_name
  );

  return {
    props: {
      categoryPosts,
    },
  };
};
