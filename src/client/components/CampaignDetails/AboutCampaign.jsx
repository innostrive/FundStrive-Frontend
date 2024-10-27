import { Progress, Typography } from "@material-tailwind/react";
import useCampaignsInfo from "../../hooks/useCampaignInfo";

const AboutCampaign = ({ id }) => {
  const campaign = useCampaignsInfo(id);
  const goal = campaign?.target_amount;
  const raised = campaign?.raised_amount;
  const initialProgress = ((raised / goal) * 100).toFixed(2);
  return (
    <div className="space-y-5">
      <h1 className="text-base font-medium leading-normal tracking-normal">
        {campaign?.name}
      </h1>
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" variant="small">
            Completed
          </Typography>
          <Typography color="blue-gray" variant="small">
            {initialProgress}%
          </Typography>
        </div>
        <Progress
          value={initialProgress}
          className="bg-secondary text-xs"
          color="cyan"
          size="sm"
        />
      </div>
      <div className="grid grid-cols-2 place-content-between">
        <div className="text-center text-sm font-light">
          <p>Raised</p>
          <span className="font-medium text-primary">
            ${campaign?.raised_amount}
          </span>
        </div>
        <div className="text-center text-sm font-light">
          <p>Goal</p>
          <span className="font-medium text-[#219558]">
            ${campaign?.target_amount}
          </span>
        </div>
      </div>
      {/* <div>
        <h1 className="text-sm font-normal text-secondary">
          {campaign?.title}
        </h1>
      </div> */}
    </div>
  );
};

export default AboutCampaign;
