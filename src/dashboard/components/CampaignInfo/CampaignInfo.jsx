import moment from "moment";
import { Link } from "react-router-dom";
import { Edit } from "../../assets/icons/icons";

const CampaignInfo = ({ campaignInfo, category }) => {
  const campaignDeadline = moment(campaignInfo?.deadline).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <section className="flex justify-center">
      <div className="h-auto w-full max-w-5xl p-5 rounded-md bg-white border space-y-10">
        <div className="flex ml-auto p-2 bg-red-200 rounded-md w-10">
          <Link to={`/dashboard/edit-campaign/${campaignInfo?._id}`}>
            {" "}
            <Edit className="size-6 text-white" />
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div>
            <img
              src={campaignInfo?.image}
              alt=""
              className="rounded-full h-20 w-20"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-medium text-black">
              {campaignInfo?.name}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-2">
            <span className="text-sm">Name</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {campaignInfo?.name}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Ttile</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {campaignInfo?.title}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Category</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {category?.name}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Raised Amount</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              ${campaignInfo?.raised_amount}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Target Amount</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              ${campaignInfo?.target_amount}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Deadline</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {campaignDeadline}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm">Description</span>
            <p className="bg-[#f3f4f7] p-2 rounded-md text-base text-center font-medium text-black">
              {campaignInfo?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignInfo;
