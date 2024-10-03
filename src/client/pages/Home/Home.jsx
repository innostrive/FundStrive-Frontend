import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import SuportedPartner from "../../components/SuportedPartner/SuportedPartner";
import Volunteer from "../../components/Volunteer/Volunteer";
import AboutUs from "../../components/AboutUs/AboutUs";
import Faq from "../../components/Faq/Faq";
import Blogs from "../../components/Blogs/Blogs";
import Footer from "../../components/Footer/Footer";
import Campaigns from "../../components/Campaigns/Campaigns";

const Home = () => {
  return (
    <>
      <Header />
      <Campaigns />
      <SuportedPartner />
      <Volunteer />
      <AboutUs />
      <Faq />
      <Blogs />
    </>
  );
};

export default Home;
