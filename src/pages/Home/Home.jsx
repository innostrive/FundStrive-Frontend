import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Campaign from "../../components/Campaign/Campaign";
import SuportedPartner from "../../components/SuportedPartner/SuportedPartner";
import Volunteer from "../../components/Volunteer/Volunteer";
import AboutUs from "../../components/AboutUs/AboutUs";
import Faq from "../../components/Faq/Faq";
import Blogs from "../../components/Blogs/Blogs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Campaign />
      <SuportedPartner />
      <Volunteer />
      <AboutUs />
      <Faq />
      <Blogs />
    </>
  );
};

export default Home;
