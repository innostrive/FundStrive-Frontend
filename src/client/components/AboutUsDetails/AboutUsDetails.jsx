import donate from "../../assets/donation.jpg";
import AboutUsHeader from "./AboutUsHeader";
import Projects from "./Projects";
import Authority from "./Authority";
import JoinMisson from "./JoinMisson";
import JoinVolunteer from "./JoinVolunteer";
import OurPlan from "./OurPlan";
import TopHeader from "../../share/TopHeader/TopHeader";

const AboutUsDetails = () => {
  return (
    <div>
      <TopHeader title="About Us" image={donate} />
      <AboutUsHeader />
      <Projects />
      <JoinMisson />
      <JoinVolunteer />
      <Authority />
      <OurPlan />
    </div>
  );
};

export default AboutUsDetails;
