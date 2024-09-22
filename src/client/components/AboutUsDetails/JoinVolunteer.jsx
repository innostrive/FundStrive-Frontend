import Container from "../Container/Container";
import donation from "../../assets/donation-2.jpg";
import { Link } from "react-router-dom";
import { Button } from "../../Styles/Styles";
const JoinVolunteer = () => {
  return (
    <section className="bg-[#2B2A27]">
      <Container>
        <div className="grid grid-cols-2 gap-10 place-items-center">
          <div className="space-y-4">
            <h1 className="text-5xl font-medium tracking-normal text-[#f3f4f7]">
              Join as a volunteer
            </h1>
            <p className="text-sm font-normal leading-normal text-[#f3f4f7]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              quaerat voluptates id inventore adipisci ad.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
            <div className="absolute inset-0 grid place-items-center">
              <Link to="/sign-up">
                <Button label="Join Us" />
              </Link>
            </div>
            <img src={donation} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinVolunteer;
