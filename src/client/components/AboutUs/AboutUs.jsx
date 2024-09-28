import { Button, Title } from "../../Styles/Styles";
import Container from "../Container/Container";
import happy from "../../assets/glitter.png";
import volunteer from "../../assets/shirt.png";
import donation from "../../assets/cash.png";
import award from "../../assets/medal.png";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 scroll-mt-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 px-5 sm:px-0">
          <div className="space-y-8 sm:place-self-center">
            <Title title="About Us" className="text-left" />
            <p className="text-sm font-light leading-loose tracking-normal">
              Lorem ipsum dolor sit, amet consectetur dummy text. Distinctio est
              sint cumque non natus quidem iusto, pariatur voluptatem.
              Voluptates perspiciatis ex alias facilis fugit veniam quo nihil
              quasi, culpa possimus molestiae hic minus quas nesciunt
              accusantium sequi odio esse vero quia voluptatibus! Soluta
              recusandae id temporibus quaerat corrupti, alias modi.
            </p>
            <div>
              <Link to={"/about-us"}>
                {" "}
                <Button label="Read Details" className="bg-secondary" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
              <img src={happy} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#2B2A27]">6528+</span>
              <p className="text-sm font-light text-[#2B2A27] tracking-normal">
                Made Happy
              </p>
            </div>
            <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
              <img src={award} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#2B2A27]">6528+</span>
              <p className="text-sm font-light text-[#2B2A27] tracking-normal">
                Award
              </p>
            </div>
            <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
              <img src={volunteer} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#2B2A27]">6528+</span>
              <p className="text-sm font-light text-[#2B2A27] tracking-normal">
                Total Volunteer
              </p>
            </div>
            <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
              <img src={donation} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#2B2A27]">6528+</span>
              <p className="text-sm font-light text-[#2B2A27] tracking-normal">
                Dontaion Completed
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
