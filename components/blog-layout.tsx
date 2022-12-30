import React from "react";
import Link from "next/link";
import { CommonLayoutPage } from "./common-layout";
import Head from "next/head";

interface BlogLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    description: string;
    date: string;
    image: string;
    id: string;
  };
}

export function BlogLayoutPage({ children, meta }: BlogLayoutProps) {
  return (
    <CommonLayoutPage>
      <Head>
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta
          property="og:description"
          content={meta.description}
          key="ogdesc"
        />
        {/* <meta property="og:image" content={meta.img} key="ogimage" /> */}
        <meta
          property="og:url"
          content={`https://www.my-blog.com/${meta.id}`}
          key="ogurl"
        />
        <meta property="og:type" content="article" key="ogtype" />
        <title>{`Blog | ${meta.title}`}</title>
      </Head>
      <div className="flex flex-col justify-center items-center mb-20 px-5">
        <div className="flex flex-col justify-center items-start max-w-4xl mt-10 space-y-5">
          <h1 className="text-5xl font-bold text-justify text-gray-100">
            {meta.title}
          </h1>
          <span className="inline-block py-1.5 px-2.5 text-sm leading-none text-center whitespace-nowrap align-baseline bg-neutral-900 text-gray-400 rounded-2xl">
            {new Date(meta.date).toLocaleDateString()}
          </span>
        </div>
        {/* border top 1px */}
        <div className="border-t-gray-600 border-t w-full max-w-4xl mt-6 pt-4 prose prose-lg prose-dark dark:prose-dark">
          {children}
        </div>
      </div>
    </CommonLayoutPage>
  );
}
