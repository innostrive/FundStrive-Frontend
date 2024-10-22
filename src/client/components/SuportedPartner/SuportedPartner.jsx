import Marquee from "react-fast-marquee";
import { Title } from "../../Styles/Styles";
import brand1 from "../../assets/brand-1.png";
import brand2 from "../../assets/brand-2.png";
import brand3 from "../../assets/brand-3.png";
import brand4 from "../../assets/brand-4.png";
import brand5 from "../../assets/brand-5.png";
import brand6 from "../../assets/brand-6.png";
import brand7 from "../../assets/brand-7.png";
import brand8 from "../../assets/brand-8.png";
import brand9 from "../../assets/brand-9.png";
import brand10 from "../../assets/brand-10.png";
import brand11 from "../../assets/brand-11.png";
import brand12 from "../../assets/brand-12.png";
import Container from "../Container/Container";
import usePartnerData from "../../hooks/usePartnerData";
const SuportedPartner = () => {
  const [partners] = usePartnerData();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  console.log("partner:", partners);
  return (
    <div className="py-20">
      <div className="py-20">
        <Title title="Our most trusted partner" />
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
