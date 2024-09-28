import { Link } from "react-router-dom";
import donate from "../../assets/donate-1.jpg";
import { Button, Title } from "../../Styles/Styles";
import Container from "../Container/Container";
import useCampaignsData from "../../hooks/useCampaignsData";
const Campaign = () => {
  const campaigns = useCampaignsData();
  return (
    <div id="campaign" className="bg-[#f3f4f7] py-20 scroll-mt-10">
      <div>
        <Title title="Our Latest Campaign" />
        <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
      </div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-5 px-5 sm:px-0">
          {campaigns.map((campaign) => (
            <div
              className="h-auto w-full sm:max-w-96 rounded-md bg-white"
              key={campaign?._id}
            >
              <img src={donate} alt="" className="h-52 w-full object-cover" />
              <div className="space-y-5 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={donate}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="text-sm font-normal">{campaign?.name}</p>
                  </div>
                  <Link to={`/campaign/${campaign?._id}`}>
                    <div>
                      <Button label="Donate" className="bg-primary" />
                    </div>
                  </Link>
                </div>
                <div className="">
                  <h1 className="font-medium text-secondary text-base">
                    {campaign?.title}
                  </h1>
                </div>

                <div className="p-5 bg-[#f3f4f7]">
                  <div className="w-full rounded-full h-0.5 bg-[#2B2A27]">
                    <div className="bg-primary h-0.5 rounded-full w-[45%]"></div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="font-bold text-sm text-secondary">
                    ${campaign?.raised_amount}
                    <span className="font-semibold text-sm ml-1 tracking-normal text-primary">
                      Raised
                    </span>
                  </p>
                  <p className="font-bold text-sm text-secondary">
                    ${campaign?.target_amount}
                    <span className="font-semibold text-sm ml-1 tracking-normal text-[#219558]">
                      Goal
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid place-content-center py-10">
          <Link to={"/campaign-list"}>
            <Button label="See All" className="bg-primary" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Campaign;
