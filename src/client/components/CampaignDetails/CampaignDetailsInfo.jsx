import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import donate from "../../assets/donate-1.jpg";
import Gallery from "./Gallery";
import { useParams } from "react-router-dom";
import useCampaignsInfo from "../../hooks/useCampaignInfo";
import {
  GalleryIcon,
  ReviewIcon,
  DocumentIcon,
  DescriptionIcon,
} from "../../assets/icons/icons";
import Reviews from "../Reviews/Reviews";
import CampaignDocument from "./CampaignDocument";
import { getTranslationObject } from "../../../../i18next";

const CampaignDetailsInfo = ({ id }) => {
  const campaign = useCampaignsInfo(id);
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const campaignId = campaign?._id;
  const translation = getTranslationObject("public");
  const { description, gallery, document, reviews } = translation?.campaign;
  const data = [
    {
      label: description,
      value: "description",
      icon: DescriptionIcon,
      desc: (
        <div dangerouslySetInnerHTML={{ __html: campaign?.description }}></div>
      ),
    },
    {
      label: gallery,
      value: "gallery",
      icon: GalleryIcon,
      desc: <Gallery campaignId={campaignId} />,
    },
    {
      label: document,
      value: "document",
      icon: DocumentIcon,
      desc: <CampaignDocument campaignId={campaignId} />,
    },
    {
      label: reviews,
      value: "reviews",
      icon: ReviewIcon,
      desc: <Reviews campaignId={campaignId} />,
    },
  ];
  return (
    <section>
      <div>
        <img
          src={imageUrl + campaign?.image}
          crossOrigin="anonymous"
          alt=""
          className="h-80 w-full object-cover"
        />
      </div>
      <Tabs value="description" className="my-5">
        <TabsHeader className="border border-gray-200 bg-white">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2 uppercase text-secondary">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="px-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
};
export default CampaignDetailsInfo;
