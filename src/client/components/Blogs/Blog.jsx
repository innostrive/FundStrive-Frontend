import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import donate from "../../assets/donate-1.jpg";
// import { Button } from "../../Styles/Styles";
import moment from "moment/moment";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Blog = ({ blog }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
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
    // <div className="h-auto w-full sm:max-w-96 rounded-md shadow-sm bg-white border border-gray-100">
    //   <img
    //     src={imageUrl + blog?.image}
    //     crossOrigin="anonymous"
    //     alt=""
    //     className="h-52 w-full object-cover"
    //   />
    //   <div className="space-y-4 p-4">
    //     <div className="flex justify-between items-center">
    //       <p className="text-xs font-semibold tracking-wide">
    //         Published At: {publishedDate}
    //       </p>
    //       <p className="text-xs font-semibold tracking-wide">
    //         Author: {author?.name}
    //       </p>
    //     </div>
    //     <h1 className="text-base font-normal">{blog?.title}</h1>
    //     <div className="flex justify-between items-center">
    //       <Link to={`/blog/${blog._id}`}>
    //         {" "}
    //         <Button
    //           label="Read More"
    //           className="bg-primary hover:bg-secondary duration-200 ease-in text-text-primary rounded-none uppercase"
    //         />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <Card className="w-96 border shadow-sm">
      <CardHeader shadow={false} floated={false} className="h-80">
        <img
          src={imageUrl + blog?.image}
          crossOrigin="anonymous"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="h-auto">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Published At: {publishedDate}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            Author: {author?.name}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {blog?.title}
        </Typography>
      </CardBody>
      <CardFooter>
        <Link to={`/blog/${blog._id}`}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-primary hover:bg-cyan-700 text-white shadow-none hover:shadow-none focus:scale-105 focus:shadow-none"
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Blog;
