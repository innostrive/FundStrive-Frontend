import AboutCampaign from "./AboutCampaign";
import DonateForm from "./DonateForm";
import ShareCampaign from "./ShareCampaign";

const DonateInfo = () => {
  return (
    <div className="border border-gray-200 rounded-md bg-white w-full h-auto p-5">
      <AboutCampaign />
      <DonateForm />
      <ShareCampaign />
    </div>
  );
};

export default DonateInfo;
