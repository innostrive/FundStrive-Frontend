import AllCampaign from "../../components/AllCamapaign/AllCampaign";
import TopHeader from "../../share/TopHeader/TopHeader";
import donation from "../../assets/donate-1.jpg";
const AllCampaignList = () => {
  return (
    <div>
      <TopHeader title="All Campaign" image={donation} />
      <AllCampaign />
    </div>
  );
};

export default AllCampaignList;
