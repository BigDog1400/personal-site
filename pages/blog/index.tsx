import React from "react";
import { CommonLayoutPage } from "../../components/common-layout";

function BlogPage() {
  return (
    <CommonLayoutPage>
      <div className="flex flex-col justify-between items-center min-h-screen p-4 md:p-0 md:pt-10">
        <h1>Blog</h1>
      </div>
    </CommonLayoutPage>
  );
}

export default BlogPage;
