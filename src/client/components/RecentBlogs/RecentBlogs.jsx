import useBlogsData from "../../../dashboard/hooks/useBlogsData";
import ShareCampaign from "../CampaignDetails/ShareCampaign";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
  const posts = useBlogsData();
  return (
    <div className="border border-gray-200 rounded-md bg-white w-full h-auto">
      <div className="w-full p-2 bg-[#2B2A27]">
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
