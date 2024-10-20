import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import BlogReview from "./BlogReview";
import moment from "moment";
const Blog = ({ blog }) => {
  const userId = blog?.created_by;
  const [author, setAuthor] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/api/users/${userId}`).then((res) => {
      setAuthor(res.data.data);
    });
  }, [userId]);
  const publishedDate = moment(blog?.created_at).format("DD-MM-YYYY");
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
