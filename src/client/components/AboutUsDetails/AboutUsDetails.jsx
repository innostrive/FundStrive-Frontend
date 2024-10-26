import donate from "../../assets/donation.jpg";
import AboutUsHeader from "./AboutUsHeader";
import Projects from "./Projects";
import JoinMisson from "./JoinMisson";
import JoinVolunteer from "./JoinVolunteer";
import OurPlan from "./OurPlan";
import TopHeader from "../../share/TopHeader/TopHeader";
import Volunteer from "../Volunteer/Volunteer";

const AboutUsDetails = () => {
  return (
    <div>
      <TopHeader title="About Us" image={donate} />
      <AboutUsHeader />
      <Projects />
      <JoinMisson />
      <JoinVolunteer />
      <Volunteer />
      <OurPlan />
    </div>
  );
};

export default AboutUsDetails;
