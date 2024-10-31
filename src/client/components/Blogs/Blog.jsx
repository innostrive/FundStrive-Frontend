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
    <Card className="w-96 border shadow-sm flex flex-col h-[24rem]">
      <CardHeader shadow={false} floated={false} className="h-40 flex-shrink-0">
        <img
          src={imageUrl + blog?.image}
          crossOrigin="anonymous"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="h-auto flex-grow max-h-32">
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="font-medium text-sm text-secondary"
          >
            Published At: {publishedDate}
          </Typography>
          <Typography
            color="blue-gray"
            className="font-medium text-sm text-secondary"
          >
            Author: {author?.name}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-medium text-secondary text-base"
        >
          {blog?.title}
        </Typography>
      </CardBody>
      <CardFooter className="h-16 flex items-center flex-shrink-0">
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
