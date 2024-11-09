import { getTranslationObject } from "../../../../i18next";
import BlogReview from "./BlogReview";
const Blog = ({ blog, author, publishedDate }) => {
  const translation = getTranslationObject("public");
  const { publishedAt, writer } = translation?.blog;
  return (
    <div className="space-y-10">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold tracking-wide">
            {publishedAt}: {publishedDate}
          </p>
          <p className="text-xs font-semibold tracking-wide">
            {writer}: {author?.name}
          </p>
        </div>
        <div
          className="text-sm font-normal leading-normal tracking-wide"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        ></div>
      </div>
      <BlogReview blog={blog} />
    </div>
  );
};

export default Blog;
