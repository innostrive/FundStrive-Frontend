import Marquee from "react-fast-marquee";
import { Title } from "../../Styles/Styles";

import Container from "../Container/Container";
import usePartnerData from "../../hooks/usePartnerData";
import { useTranslation } from "react-i18next";
const SuportedPartner = () => {
  const [partners] = usePartnerData();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const { t } = useTranslation();
  const title = t("componentTitle.partnerTitle");
  return (
    <div className="py-20">
      <div className="pb-5">
        <Title title={title} />
        <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
      </div>
      <Container>
        <div className="space-y-10 px-5 sm:px-0">
          <Marquee
            className="m-5 flex"
            pauseOnHover={true}
            speed={20}
            autoFill={true}
          >
            {partners.map((partner) => (
              <img
                key={partner?._id}
                src={imageUrl + partner?.image}
                alt={partner?.name || "Partner Logo"}
                className="object-cover h-20 w-20 rounded-full mx-4"
                crossOrigin="anonymous"
              />
            ))}
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default SuportedPartner;
