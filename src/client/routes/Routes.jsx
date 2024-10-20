import { createBrowserRouter } from "react-router-dom";
import ScrollTop from "../share/ScrollTop/ScollTop";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
import ContactUs from "../pages/ContactUs/ContactUs";
import AllCampaignList from "../pages/AllCampaignList/AllCampaignList";
import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import ProtectedRoute from "../../dashboard/layout/ProtectedRoute";
import Login from "../../dashboard/pages/auth/Login/Login";
import SignUp from "../../dashboard/pages/auth/SignUp/SignUp";
import MainLayout from "../../dashboard/layout/MainLayout";
import adminPath from "./admin.routes";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import RecentBlogDetail from "../components/RecentBlogs/RecentBlogDetail";
import PaymentSuccessfull from "../pages/PaymentSuccessfull/PaymentSuccessfull";
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
      {
        path: "/recent-blog-details/:id",
        element: <RecentBlogDetail />,
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
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },
  {
    path: "/success/:paymentInfo",
    element: <PaymentSuccessfull />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: adminPath,
  },
]);
