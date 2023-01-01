import React from "react";
import Head from "next/head";

interface HeadMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function HeadMetadata({
  title = "Isaac - Desarrollador web",
  description = "Un blog sobre desarrollo web, react, typescript, etc.",
  image = "",
  url = "",
}: HeadMetadataProps) {
  console.log("title", title);
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:url" content={url} />
      <meta name="og:type" content="website" />
      <meta name="twitter:site" content="@log1400" />
      <meta name="twitter:creator" content="@log1400" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
