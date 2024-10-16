import Header from "../../components/Header/Header";
import SuportedPartner from "../../components/SuportedPartner/SuportedPartner";
import Volunteer from "../../components/Volunteer/Volunteer";
import AboutUs from "../../components/AboutUs/AboutUs";
import Faq from "../../components/Faq/Faq";
import Blogs from "../../components/Blogs/Blogs";
import Campaigns from "../../components/Campaigns/Campaigns";
import JoinVolunteer from "../../components/AboutUsDetails/JoinVolunteer";

const Home = () => {
  return (
    <>
      <Header />
      <Campaigns />
      <SuportedPartner />
      <Volunteer />
      <JoinVolunteer />
      <AboutUs />
      <Faq />
      <Blogs />
    </>
  );
};

export default Home;
