import { useParams } from "react-router-dom";
import Container from "../Container/Container";
import Blog from "./Blog";
import useBlogDetails from "../../hooks/useBlogDetails";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import moment from "moment";
const BlogDetails = () => {
  const { id } = useParams();
  const blog = useBlogDetails(id);
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
    <div className="py-10 bg-[#f3f4f7] h-auto min-h-screen">
      <Container>
        <div className="grid sm:grid-cols-12 grid-cols-1 gap-4 sm:px-0 px-5">
          <div className="sm:col-span-8">
            <Blog blog={blog} author={author} publishedDate={publishedDate} />
          </div>
          <div className="sm:col-span-4">
            <RecentBlogs />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
