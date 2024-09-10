import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/layout/Layout";
import ContactUs from "../pages/ContactUs/ContactUs";
import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import ScrollTop from "../share/ScrollTop/ScollTop";
import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
import AllCampaignList from "../pages/AllCampaignList/AllCampaignList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUsDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/campaign-list",
        element: <AllCampaignList />,
      },
      {
        path: "/campaign/:id",
        element: <CampaignDetails />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
