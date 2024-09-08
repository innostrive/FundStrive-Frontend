import Container from "../Container/Container";
import CampaignDetailsInfo from "./CampaignDetailsInfo";
import DonateInfo from "./DonateInfo";

const CampaignDetails = () => {
  return (
    <div className="py-10 bg-[#f3f4f7] h-auto min-h-screen">
      <Container>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <CampaignDetailsInfo />
          </div>
          <div className="col-span-4">
            <DonateInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CampaignDetails;
