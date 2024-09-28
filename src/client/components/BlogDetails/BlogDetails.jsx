import { useParams } from "react-router-dom";
import Container from "../Container/Container";
import Blog from "./Blog";
import useBlogDetails from "../../hooks/useBlogDetails";
import RecentBlogs from "../RecentBlogs/RecentBlogs";
const BlogDetails = () => {
  const { id } = useParams();
  const blog = useBlogDetails(id);
  return (
    <div className="py-10 bg-[#f3f4f7] h-auto min-h-screen">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <Blog blog={blog} />
          </div>
          <div className="col-span-4">
            <RecentBlogs />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
