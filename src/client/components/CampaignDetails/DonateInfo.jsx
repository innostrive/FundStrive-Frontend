import AboutCampaign from "./AboutCampaign";
import DonateForm from "./DonateForm";
import ShareCampaign from "./ShareCampaign";

const DonateInfo = ({ id }) => {
  return (
    <div className="border border-gray-200 rounded-md bg-white w-full h-auto p-5">
      <AboutCampaign id={id} />
      <DonateForm id={id} />
      <ShareCampaign />
    </div>
  );
};

export default DonateInfo;
