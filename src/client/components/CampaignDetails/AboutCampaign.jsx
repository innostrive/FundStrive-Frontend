import { Progress, Typography } from "@material-tailwind/react";
import useCampaignsInfo from "../../hooks/useCampaignInfo";
import { getTranslationObject } from "../../../../i18next";
const AboutCampaign = ({ id }) => {
  const campaign = useCampaignsInfo(id);
  const goal = campaign?.target_amount || 0;
  const raised = campaign?.raised_amount || 0;
  const initialProgress =
    goal > 0 ? ((raised / goal) * 100).toFixed(2) : "0.00";
  const translation = getTranslationObject("public");
  const { completed, raised: raisedT, goal: goalT } = translation?.campaign;
  return (
    <div className="space-y-5">
      <h1 className="text-base font-medium leading-normal tracking-normal">
        {campaign?.name}
      </h1>
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" variant="small">
            {completed}
          </Typography>
          <Typography color="blue-gray" variant="small">
            {initialProgress}%
          </Typography>
        </div>
        <Progress
          value={Number(initialProgress)}
          className="bg-secondary text-xs"
          color="cyan"
          size="sm"
        />
      </div>
      <div className="grid grid-cols-2 place-content-between">
        <div className="text-center text-sm font-light">
          <p>{raisedT}</p>
          <span className="font-medium text-primary">
            ${campaign?.raised_amount > 0 ? campaign?.raised_amount : 0}
          </span>
        </div>
        <div className="text-center text-sm font-light">
          <p>{goalT}</p>
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
