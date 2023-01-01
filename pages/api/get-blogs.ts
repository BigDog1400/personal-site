import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

function getReadTime(content: string) {
  const WPS = 275 / 60;

  var images = 0;
  const regex = /\w/;

  let words = content.split(" ").filter((word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;

  var imageAdjust = images * 4;
  var imageSecs = 0;
  var imageFactor = 12;

  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);

  return minutes;
}
export const getPosts = () => {
  const dirFiles = fs.readdirSync(path.join(process.cwd(), "pages", "blog"), {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "blog", file.name),
        "utf-8",
      );
      const { data, content } = matter(fileContent);

      const readTime = getReadTime(content);
      const slug = file.name.replace(/.mdx$/, "");
      return { data, slug, readTime };
    })
    .filter((post) => post);

  console.log(posts);
  return posts;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = getPosts(); // argument will change

  res.status(200).json(posts);
}
