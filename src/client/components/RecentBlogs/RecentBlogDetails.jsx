import { useEffect, useState } from "react";
import axios from "axios";
import BlogReview from "../BlogDetails/BlogReview";

const RecentBlogDetails = ({ blogId, author, publishedDate }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [blog, setBlog] = useState({});
  useEffect(() => {
    axios.get(`${URL}/posts/${blogId}`).then((res) => {
      setBlog(res.data.data);
    });
  }, [blogId]);
  return (
    <div>
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
        <BlogReview blog={blog} />
      </div>
    </div>
  );
};

export default RecentBlogDetails;
