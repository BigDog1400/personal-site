import React from "react";
import { CommonLayoutPage } from "../../components/common-layout";
import { getPosts } from "../api/get-blogs";
import Link from "next/link";

export const getStaticProps = () => {
  const posts = getPosts(); // the argument has no effect yet

  return {
    props: {
      posts,
    },
  };
};

function BlogPage({
  posts,
}: {
  posts: Array<{
    data: {
      title: string;
      date: string;
      author: string;
      id: string;
      tags: string;
      description: string;
    };
    slug: string;
    readTime: string;
  }>;
}) {
  return (
    <CommonLayoutPage>
      <div className="max-w-4xl mx-auto flex flex-col pt-4 sm:pt-10  md:px-0 px-5">
        <h1 className="text-3xl text-white font-bold">
          Blog
          <span className="text-teal-600">📝</span>
        </h1>
        <div className="pt-4">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="md:p-5 rounded-lg cursor-pointer hover:bg-gray-900">
                <h2 className="text-2xl font-bold  text-teal-600">
                  {post.data.title}
                </h2>
                <p className="mt-4  text-[#d4d4d4]">{post.data.description}</p>
                <div className="mt-4 flex flex-wrap gap-y-2 items-center">
                  {post.data.tags.split(",").map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4  text-[#d4d4d4]">
                  {new Date(post.data.date).toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  •{" "}
                  {new Intl.NumberFormat(undefined, {
                    style: "unit",
                    unit: "minute",
                    unitDisplay: "long",
                  }).format(Number(post.readTime))}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </CommonLayoutPage>
  );
}

export default BlogPage;
