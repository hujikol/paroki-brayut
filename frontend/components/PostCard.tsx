import Image from "next/image";
import Link from "next/link";
import { badgeVariants } from "./ui/badge";
import { Post } from "@/lib/data";
import { cn, toTittleCase, slugify } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  category?: string[];
}

export function PostCardHorizontal({ category, post }: PostCardProps) {
  return (
    <div className='flex flex-row w-full gap-3 overflow-hidden'>
      <div className='md:shrink-0'>
        <Image
          className='w-[300] h-[200] object-cover md:h-full md:w-48 rounded-md'
          src='/TestHeroImage.jpg'
          alt='Modern building architecture'
          width={300}
          height={200}
        />
      </div>
      <div className='flex flex-col p-2 gap-2'>
        <Link href={`/${slugify(category[0])}/${post.slug}`} passHref>
          <h2 className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
            {post.title}
          </h2>
        </Link>
        <div className='flex gap-2'>
          <span className='text-sm text-[#2F5391] font-semibold'>
            {post.date}
          </span>
          |
          {post.category.map((cat) => (
            <Link
              key={cat}
              href={`/${slugify(cat)}`}
              className={cn(
                badgeVariants({ variant: "outline" }),
                "hover:bg-blue-100"
              )}
            >
              {toTittleCase(cat, "-")}
            </Link>
          ))}
        </div>
        <p
          className='text-slate-500'
          dangerouslySetInnerHTML={{
            __html:
              post.content.length > 300
                ? post.content.substring(0, 300) + "..."
                : post.content,
          }}
        ></p>
      </div>
    </div>
  );
}

export function PostCardVertical({ category, post }: PostCardProps) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='md:shrink-0'>
        <Image
          className='w-[400] h-[250] object-cover md:h-full md:w-48 lg:w-full rounded-md'
          src='/TestHeroImage.jpg'
          alt='Modern building architecture'
          width={400}
          height={250}
        />
      </div>
      <div className='flex flex-col p-2 gap-2'>
        <Link href={`/${slugify(category[0])}/${post.slug}`} passHref>
          <h2 className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
            {post.title}
          </h2>
        </Link>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='text-sm text-[#2F5391] font-semibold'>
            {post.date}
          </span>
          |
          {post.category.map((cat) => (
            <Link
              key={slugify(cat)}
              href={`/${slugify(cat)}`}
              className={cn(
                badgeVariants({ variant: "outline" }),
                "block hover:bg-blue-100"
              )}
            >
              {toTittleCase(cat, "-")}
            </Link>
          ))}
        </div>
        <p
          className='text-slate-500'
          dangerouslySetInnerHTML={{
            __html:
              post.content.length > 70
                ? post.content.substring(0, 70) + "..."
                : post.content,
          }}
        ></p>
      </div>
    </div>
  );
}
