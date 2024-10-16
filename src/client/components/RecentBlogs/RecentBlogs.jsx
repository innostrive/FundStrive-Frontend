import useBlogsData from "../../hooks/useBlogData";
import ShareBlog from "../BlogDetails/ShareBlog";
import ShareCampaign from "../CampaignDetails/ShareCampaign";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
  const { blogs } = useBlogsData();
  return (
    <div className="border border-gray-300 rounded-md bg-text-primary w-full h-auto">
      <div className="w-full p-2 bg-secondary">
        <h1 className="text-base font-normal text-white">Recent Blogs</h1>
      </div>
      <div>
        {blogs.slice(0, 3).map((blog) => (
          <RecentBlog blog={blog} key={blog._id} />
        ))}
      </div>
      <div className="p-5">
        <ShareBlog />
      </div>
    </div>
  );
};

export default RecentBlogs;
