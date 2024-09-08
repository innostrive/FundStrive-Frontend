import { Button, Title } from "../../styles/Styles";
import Container from "../Container/Container";
import happy from "../../assets/glitter.png";
import volunteer from "../../assets/shirt.png";
import donation from "../../assets/cash.png";
import award from "../../assets/medal.png";
const AboutUs = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-2 gap-40 content-center place-content-center">
          <div className="space-y-8">
            <Title title="About Us" className="text-left" />
            <p className="text-sm font-light leading-normal tracking-wide">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio est sint cumque non natus quidem iusto, pariatur
              voluptatem. Voluptates perspiciatis ex alias facilis fugit veniam
              quo nihil quasi, culpa possimus molestiae hic minus quas nesciunt
              accusantium sequi odio esse vero quia voluptatibus! Soluta
              recusandae id temporibus quaerat corrupti, alias modi.
            </p>
            <Button label="Read Details" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
              <img src={award} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#2B2A27]">6528+</span>
              <p className="text-sm font-light text-[#2B2A27] tracking-normal">
                Made Happy
              </p>
            </div>
            <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
              <img src={happy} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#2B2A27]">6528+</span>
              <p className="text-sm font-light text-[#2B2A27] tracking-normal">
                Made Happy
              </p>
            </div>
            <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
              <img src={volunteer} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#2B2A27]">6528+</span>
              <p className="text-sm font-light text-[#2B2A27] tracking-normal">
                Made Happy
              </p>
            </div>
            <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
              <img src={donation} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#2B2A27]">6528+</span>
              <p className="text-sm font-light text-[#2B2A27] tracking-normal">
                Made Happy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
