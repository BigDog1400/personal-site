import Giscus from "@giscus/react";
import { useRouter } from "next/router";

export default function CommentsSection() {
  const router = useRouter();
  return (
    <Giscus
      repo="BigDog1400/personal-site"
      repoId="R_kgDOIozRgg"
      category="Announcements"
      categoryId="DIC_kwDOIozRgs4CTWdg"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      theme="preferred_color_scheme"
      loading="lazy"
      lang={router.locale || "es"}
    />
  );
}
