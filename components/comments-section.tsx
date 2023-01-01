import Giscus from "@giscus/react";

export default function CommentsSection() {
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
    />
  );
}
