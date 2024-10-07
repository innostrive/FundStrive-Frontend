import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";

const RecentBlogDetails = ({ blogId }) => {
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
        {/* <img src={donate} alt="" className="h-52 w-full object-cover" /> */}
        <div
          className="text-sm font-normal leading-normal tracking-wide"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        ></div>
      </div>
    </div>
  );
};

export default RecentBlogDetails;
