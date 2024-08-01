import Link from "next/link";
import { posts } from "../lib/data";
import { useState } from "react";

export default function PostList({ category }: { category: string }) {
  const filteredPosts = posts.filter((post) => post.category === category);
  const [visiblePosts, setVisiblePosts] = useState(filteredPosts.slice(0, 5));

  const loadMore = () => {
    setVisiblePosts(filteredPosts.slice(0, visiblePosts.length + 5));
  };

  return (
    <div>
      {visiblePosts.map((post) => (
        <div key={post.slug} className="post">
          <Link href={`/${category}/${post.slug}`}>
            <a>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <p>{post.content}</p>
            </a>
          </Link>
        </div>
      ))}
      {visiblePosts.length < filteredPosts.length && (
        <button onClick={loadMore}>Muat Lebih Banyak</button>
      )}
    </div>
  );
}
