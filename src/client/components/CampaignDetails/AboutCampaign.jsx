import { Progress } from "@material-tailwind/react";
import useCampaignsInfo from "../../hooks/useCampaignInfo";

const AboutCampaign = ({ id }) => {
  const campaign = useCampaignsInfo(id);
  const goal = campaign?.target_amount;
  const raised = campaign?.raised_amount;
  const average = (raised + goal) / 2;
  const initialProgress = Math.round((average / goal) * 100);
  return (
    <div className="space-y-5">
      <h1 className="text-base font-medium leading-normal tracking-normal">
        {campaign?.name}
      </h1>
      {/* <div className="w-full rounded-full h-0.5 bg-[#2B2A27]">
        <div className="bg-[#f47721] h-0.5 rounded-full w-[45%]"></div>
      </div> */}
      <Progress
        value={initialProgress}
        label="Completed"
        size="md"
        className="bg-secondary h-3"
        color="cyan"
      />
      <div className="grid grid-cols-2 place-content-between">
        <div className="text-center text-sm font-light">
          <p>Goal</p>
          <span className="font-medium text-[#219558]">
            ${campaign?.target_amount}
          </span>
        </div>
        <div className="text-center text-sm font-light">
          <p>Raised</p>
          <span className="font-medium text-[#f47721]">
            ${campaign?.raised_amount}
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-sm font-normal text-secondary">
          {campaign?.title}
        </h1>
      </div>
    </div>
  );
};

export default AboutCampaign;
