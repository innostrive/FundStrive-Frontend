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
      <div className="py-20">
        <Title title={title} />
        <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
      </div>
      <Container>
        <div className="space-y-10 px-5 sm:px-0">
          <Marquee
            className="m-5 flex"
            pauseOnHover={true}
            autoFill={true}
            speed={20}
          >
            {partners.map((partner) => (
              <img
                key={partner?._id}
                src={imageUrl + partner?.image}
                alt=""
                className="object-cover h-20 w-20"
                crossOrigin="anonymous"
              />
            ))}
          </Marquee>
          {/* <Marquee
            className="gap-4"
            pauseOnHover={true}
            autoFill={true}
            direction="right"
            speed={20}
          >
            <img src={brand7} alt="" className="object-cover" />
            <img src={brand8} alt="" className="object-cover" />
            <img src={brand9} alt="" className="object-cover" />
            <img src={brand10} alt="" className="object-cover" />
            <img src={brand11} alt="" className="object-cover" />
            <img src={brand12} alt="" className="object-cover" />
          </Marquee> */}
        </div>
      </Container>
    </div>
  );
};

export default SuportedPartner;
