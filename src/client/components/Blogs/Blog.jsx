import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import donate from "../../assets/donate-1.jpg";
import { Button } from "../../Styles/Styles";
import moment from "moment/moment";
import useAxiosSecure from "../../hooks/useAxiosSecure";
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

  const content = blog?.content;
  const contentWithoutImages = content?.replace(/<img[^>]*>/g, "").trim();

  const sliceText = (text, size) => {
    if (text.length > size) {
      return text.slice(0, size) + "...";
    } else {
      return text;
    }
  };
  return (
    <div className="h-auto w-full sm:max-w-96 rounded-md bg-white border border-gray-100">
      <img src={donate} alt="" className="h-52 w-full object-cover" />
      <div className="space-y-4 p-4">
        <div className="flex justify-between items-center">
          <p className="text-xs font-semibold tracking-wide">
            Published At: {publishedDate}
          </p>
          <p className="text-xs font-semibold tracking-wide">
            Author: {author?.name}
          </p>
        </div>
        {/* <p
          dangerouslySetInnerHTML={{
            __html: sliceText(contentWithoutImages, 90),
          }}
        ></p> */}
        <h1 className="text-base font-normal">{blog?.title}</h1>
        <div className="flex justify-between items-center">
          <Link to={`/blog/${blog._id}`}>
            {" "}
            <Button
              label="Read More"
              className="bg-primary hover:bg-secondary duration-200 ease-in text-text-primary rounded-none uppercase"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
