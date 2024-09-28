import donate from "../../assets/donate-1.jpg";
import Container from "../Container/Container";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const AboutUsHeader = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-0 px-5">
          <div className="space-y-5">
            <h1 className="text-5xl font-extrabold leading-normal">
              Learn More About Our Foundation
            </h1>
            <p className="text-base font-normal leading-loose">
              Lorem ipsum dolor sit amet consectetur dummy text, nesciunt. Quae
              at iure voluptatibus, doloremque natus iusto voluptate nostrum
              adipisci? Ex nihil eum aspernatur voluptates.
            </p>
            <div className="grid grid-rows-1 grid-flow-col gap-5">
              <div className="bg-[#caccd1] h-10 w-10 grid place-items-center opacity-75 text-[#33186B]">
                <IoIosCheckmarkCircleOutline size={25} />
              </div>
              <div className="space-y-2">
                <h1 className="text-lg font-bold text-[#52565e]">
                  Highest Success Rates
                </h1>
                <p className="text-base font-normal leading-loose">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quam, delectus.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-5">
              <div className="bg-[#caccd1] h-10 w-10 grid place-items-center opacity-75 text-[#33186B]">
                <IoIosCheckmarkCircleOutline size={25} />
              </div>
              <div className="space-y-2">
                <h1 className="text-lg font-bold text-[#52565e]">
                  Highest Success Rates
                </h1>
                <p className="text-base font-normal leading-loose">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quam, delectus.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={donate} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUsHeader;
