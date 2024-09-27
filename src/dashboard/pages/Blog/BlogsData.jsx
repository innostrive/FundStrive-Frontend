import Blogs from "../../components/Blogs/Blogs";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BlogsData = () => {
  return (
    <div className="border border-b border-gray-200 rounded-md p-5">
      <div className="flex justify-between py-5">
        <h1 className="text-lg font-medium">Blog List</h1>
        <Link to="/dashboard/create-blog">
          <Button className="bg-[#2B2A27] ">Create New Blog</Button>
        </Link>
      </div>
      <Blogs></Blogs>
    </div>
  );
};

export default BlogsData;
