import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RecentBlogDetails = ({ blogId }) => {
  const axiosSecure = useAxiosSecure();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    axiosSecure.get(`/posts/${blogId}`).then((res) => {
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
