import { createBrowserRouter } from "react-router-dom";
import ScrollTop from "../share/ScrollTop/ScollTop";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
import ContactUs from "../pages/ContactUs/ContactUs";
import AllCampaignList from "../pages/AllCampaignList/AllCampaignList";
import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Sidebar from "../../dashboard/Sidebar/Sidebar";
import Dashboard from "../../dashboard/pages/dashboard/Dashboard";
import Users from "../../dashboard/pages/Users/Users";
import ProtectedRoute from "../../dashboard/layout/ProtectedRoute";
// import Home from "../pages/Home/Home";
// import Layout from "../components/layout/Layout";
// import ContactUs from "../pages/ContactUs/ContactUs";
// import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
// import BlogDetails from "../components/BlogDetails/BlogDetails";
// import Login from "../pages/Auth/Login/Login";
// import SignUp from "../pages/Auth/SignUp/SignUp";
// import ScrollTop from "../share/ScrollTop/ScollTop";
// import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
// import AllCampaignList from "../pages/AllCampaignList/AllCampaignList";
// import Dashboard from "../admin/Dashboard/Sidebar";
// import Sidebar from "../admin/Dashboard/Sidebar";

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
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/users",
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
  },
]);
