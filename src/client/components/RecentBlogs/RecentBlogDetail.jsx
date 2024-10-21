import { useParams } from "react-router-dom";
import useBlogDetails from "../../hooks/useBlogDetails";
import Container from "../Container/Container";
import RecentBlogDetails from "./RecentBlogDetails";
import RecentBlogs from "./RecentBlogs";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import moment from "moment";

const RecentBlogDetail = () => {
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
            <RecentBlogDetails
              blogId={id}
              author={author}
              publishedDate={publishedDate}
            />
          </div>
          <div className="sm:col-span-4">
            <RecentBlogs />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecentBlogDetail;
