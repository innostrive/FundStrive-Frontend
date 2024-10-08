import { Link } from "react-router-dom";
import donate from "../../assets/donate-1.jpg";
import { Button } from "../../Styles/Styles";
import { Progress } from "@material-tailwind/react";
const AllCampaign = ({ campaign }) => {
  const goal = campaign?.target_amount;
  const raised = campaign?.raised_amount;
  const average = (raised + goal) / 2;
  const initialProgress = Math.round((average / goal) * 100);
  return (
    <div className="h-auto w-full max-w-96 rounded-md bg-white">
      <img src={donate} alt="" className="h-52 w-full object-cover" />
      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={donate} alt="" className="h-10 w-10 rounded-full" />
            <p className="text-sm font-normal">{campaign?.organization}</p>
          </div>
          <Link to={`/campaign/${campaign?._id}`}>
            <div>
              <Button label="Donate" className="bg-primary" />
            </div>
          </Link>
        </div>
        <div className="">
          <h1 className="font-medium text-secondary text-base">
            {campaign?.title}
          </h1>
        </div>
        <div className="h-20">
          <div className="p-5 bg-[#f3f4f7]">
            <Progress
              value={initialProgress}
              label="Completed"
              size="md"
              className="bg-secondary h-3"
              color="cyan"
            />
          </div>

          <div className="flex justify-between mt-5">
            <p className="font-bold text-sm text-[#00112c]">
              ${campaign?.raised_amount}
              <span className="font-semibold text-sm ml-1 tracking-normal text-primary">
                Raised
              </span>
            </p>
            <p className="font-bold text-sm text-[#00112c]">
              ${campaign.target_amount}
              <span className="font-semibold text-sm ml-1 tracking-normal text-[#219558]">
                Goal
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;
