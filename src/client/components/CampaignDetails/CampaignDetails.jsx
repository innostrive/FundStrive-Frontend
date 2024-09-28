import Container from "../Container/Container";
import CampaignDetailsInfo from "./CampaignDetailsInfo";
import DonateInfo from "./DonateInfo";

const CampaignDetails = () => {
  return (
    <div className="py-10 bg-[#f3f4f7] h-auto min-h-screen">
      <Container>
        <div className="grid sm:grid-cols-12 grid-cols-1 gap-4 sm:px-0 px-5">
          <div className="sm:col-span-8">
            <CampaignDetailsInfo />
          </div>
          <div className="sm:col-span-4">
            <DonateInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CampaignDetails;
