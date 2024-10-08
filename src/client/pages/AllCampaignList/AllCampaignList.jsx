import AllCampaign from "../../components/AllCamapaign/AllCampaign";
import TopHeader from "../../share/TopHeader/TopHeader";
import donation from "../../assets/donate-1.jpg";
import useCampaignsData from "../../hooks/useCampaignsData";
import Container from "../../components/Container/Container";
import { Title } from "../../Styles/Styles";
const AllCampaignList = () => {
  const campaigns = useCampaignsData();
  return (
    <div>
      <TopHeader title="All Campaign" image={donation} />

      <div id="campaign" className="bg-[#f3f4f7] py-20 scroll-mt-10">
        <div>
          <Title title="Our Latest Campaign" />
          <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
        </div>
        <Container>
          <div className="grid grid-cols-3 gap-10 mt-5">
            {campaigns.map((campaign) => (
              <AllCampaign campaign={campaign} key={campaign?._id} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllCampaignList;
