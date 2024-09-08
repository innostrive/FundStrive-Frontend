import Container from "../Container/Container";
import Blog from "./Blog";
import RecentBlog from "./RecentBlog";
const BlogDetails = () => {
  return (
    <div className="py-10 bg-[#f3f4f7] h-auto min-h-screen">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <Blog />
          </div>
          <div className="col-span-4">
            <RecentBlog />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
