import donate from "../../assets/donate-1.jpg";
import ShareCampaign from "../CampaignDetails/ShareCampaign";
const RecentBlog = () => {
  return (
    <div className="border border-gray-200 rounded-md bg-white w-full h-auto">
      <div className="w-full p-2 bg-[#2B2A27]">
        <h1 className="text-base font-normal text-white">Recent Blogs</h1>
      </div>
      <div className="flex gap-4 items-center border-b border-gray-400 p-5">
        <img src={donate} alt="" className="h-16 w-16 rounded-md" />
        <h1 className="text-base font-normal tracking-normal text-black">
          A Beginner's Guide to Crowdfunding
        </h1>
      </div>
      <div className="flex gap-4 items-center border-b border-gray-400 p-5">
        <img src={donate} alt="" className="h-16 w-16 rounded-md" />
        <h1 className="text-base font-normal tracking-normal text-black">
          A Beginner's Guide to Crowdfunding
        </h1>
      </div>
      <div className="flex gap-4 items-center p-5">
        <img src={donate} alt="" className="h-16 w-16 rounded-md" />
        <h1 className="text-base font-normal tracking-normal text-black">
          A Beginner's Guide to Crowdfunding
        </h1>
      </div>
      <div className="p-5">
        <ShareCampaign />
      </div>
    </div>
  );
};

export default RecentBlog;
