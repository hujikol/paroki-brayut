import Link from "next/link";
import { slugify } from "@/utils/slugify";
import { posts } from "@/lib/data";

export default function Home() {
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return (
    <main className="flex min-h-screen w-full flex-col items-center pt-24">
      <h2>Home</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/${slugify(category)}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
