import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { posts } from "@/lib/data";
import { slugify } from "@/utils/slugify";

interface PostProps {
  post: {
    title: string;
    date: string;
    content: string;
  };
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <div className="mt-4">{post.content}</div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: {
      category_name: slugify(post.category),
      slug: post.slug,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((p) => p.slug === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
