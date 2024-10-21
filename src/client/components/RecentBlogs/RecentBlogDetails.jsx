import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";

const RecentBlogDetails = ({ blogId, author, publishedDate }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const [blog, setBlog] = useState({});
  useEffect(() => {
    axios.get(`${URL}/posts/${blogId}`).then((res) => {
      setBlog(res.data.data);
    });
  }, []);
  console.log("blog:", blog);
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
      </div>
    </div>
  );
};

export default RecentBlogDetails;
