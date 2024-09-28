import useBlogsData from "../../../dashboard/hooks/useBlogsData";
import ShareCampaign from "../CampaignDetails/ShareCampaign";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
  const posts = useBlogsData();
  return (
    <div className="border border-gray-300 rounded-md bg-text-primary w-full h-auto">
      <div className="w-full p-2 bg-secondary">
        <h1 className="text-base font-normal text-white">Recent Blogs</h1>
      </div>
      <div>
        {posts.slice(0, 3).map((post) => (
          <RecentBlog post={post} key={post._id} />
        ))}
      </div>
      <div className="p-5">
        <ShareCampaign />
      </div>
    </div>
  );
};

export default RecentBlogs;
