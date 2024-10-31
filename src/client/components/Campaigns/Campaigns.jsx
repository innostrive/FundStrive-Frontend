import { Link } from "react-router-dom";
import donate from "../../assets/donate-1.jpg";
import { Button, Title } from "../../Styles/Styles";
import Container from "../Container/Container";
import useCampaignsData from "../../hooks/useCampaignsData";
import { useState } from "react";
import Campaign from "./Campaign";
import { useTranslation } from "react-i18next";
import { getTranslationObject } from "../../../../i18next";
const Campaigns = () => {
  const campaigns = useCampaignsData();
  // const [values, setValues] = useState(campaigns?.raised_amount);
  const { t } = useTranslation();
  const title = t("componentTitle.campaignTitle");
  const { campaignTitle } = getTranslationObject("componentTitle");
  // console.log("dfdf:", sidebarRoutes);
  return (
    <div id="campaign" className="bg-[#f3f4f7] py-20 scroll-mt-10">
      <div>
        <Title title={campaignTitle} />
        <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
      </div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-5 px-5 sm:px-0">
          {campaigns.slice(0, 6).map((campaign) => (
            <Campaign campaign={campaign} key={campaign?._id} />
          ))}
        </div>
        <div className="grid place-content-center py-10">
          <Link to={"/campaign-list"}>
            <Button
              label="See All"
              className="bg-primary hover:bg-secondary duration-200 ease-in text-text-primary rounded-none uppercase"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Campaigns;
