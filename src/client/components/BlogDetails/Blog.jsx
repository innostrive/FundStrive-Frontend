import BlogReview from "./BlogReview";
const Blog = ({ blog, author, publishedDate }) => {
  return (
    <div className="space-y-10">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold tracking-wide">
            Published At: {publishedDate}
          </p>
          <p className="text-xs font-semibold tracking-wide">
            Author: {author?.name}
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
