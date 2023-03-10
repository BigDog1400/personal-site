import { remarkCodeHike } from "@code-hike/mdx";

import theme from "shiki/themes/github-dark-dimmed.json" assert { type: "json" };
import withMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import { remarkHeadingId } from "remark-custom-heading-id";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { frontMatterPlugin } from "./utils/from-matter-plugin.mjs";

const _withMDX = withMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install

    remarkPlugins: [
      frontMatterPlugin,
      remarkHeadingId,
      [remarkCodeHike, { theme, showCopyButton: true }],
    ],

    rehypePlugins: [
      [
        /** @type {import('rehype-slug').Options} */
        rehypeSlug,
      ],
      [rehypeAutolinkHeadings, { behavior: "prepend" }],
    ],

    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = _withMDX({
  // Append the default value with md extensions
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

export default nextConfig;
