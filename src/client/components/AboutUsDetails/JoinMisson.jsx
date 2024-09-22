import { Title } from "../../Styles/Styles";
import Container from "../Container/Container";
import donate from "../../assets/donate-1.jpg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const JoinMisson = () => {
  return (
    <section className="py-20">
      <Container>
        <Title title="Join Our Mission" />
        <div className="grid grid-cols-2 gap-10 py-20">
          <div className="space-y-5">
            <div className="grid grid-rows-1 grid-flow-col gap-5">
              <div className="bg-[#caccd1] h-10 w-10 grid place-items-center opacity-75 text-[#33186B]">
                <IoIosCheckmarkCircleOutline size={25} />
              </div>
              <div className="space-y-2">
                <h1 className="text-lg font-bold text-[#52565e] uppercase">
                  Donate Money
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
                <h1 className="text-lg font-bold text-[#52565e] uppercase">
                  Become Volunteer
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
                <h1 className="text-lg font-bold text-[#52565e] uppercase">
                  Sponsorship
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
    </section>
  );
};

export default JoinMisson;
