import donate from "../../assets/donate-1.jpg";
import BlogReview from "./BlogReview";
const Blog = ({ blog }) => {
  return (
    <div className="space-y-10">
      <div className="space-y-8">
        {/* <img src={donate} alt="" className="h-52 w-full object-cover" /> */}
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
