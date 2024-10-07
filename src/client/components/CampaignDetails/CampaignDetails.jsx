import { useParams } from "react-router-dom";
import Container from "../Container/Container";
import CampaignDetailsInfo from "./CampaignDetailsInfo";
import DonateInfo from "./DonateInfo";

const CampaignDetails = () => {
  const { id } = useParams();
  return (
    <div className="py-10 bg-[#f3f4f7] h-auto min-h-screen">
      <Container>
        <div className="grid sm:grid-cols-12 grid-cols-1 gap-4 sm:px-0 px-5">
          <div className="sm:col-span-8">
            <CampaignDetailsInfo id={id} />
          </div>
          <div className="sm:col-span-4">
            <DonateInfo id={id} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CampaignDetails;
