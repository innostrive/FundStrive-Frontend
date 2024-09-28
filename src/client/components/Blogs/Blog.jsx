import React from "react";
import { Link } from "react-router-dom";

import donate from "../../assets/donate-1.jpg";
import { Button } from "../../Styles/Styles";
const Blog = ({ post }) => {
  return (
    <div className="h-auto w-full sm:max-w-96 rounded-md bg-white border border-gray-100">
      <img src={donate} alt="" className="h-52 w-full object-cover" />
      <div className="space-y-4 p-4">
        <h1>{post?.title}</h1>
        <div className="flex justify-between items-center">
          <Link to={`/blog/${post._id}`}>
            {" "}
            <Button label="Read More" className="bg-secondary" />
          </Link>
          <p>{post?.publishedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
