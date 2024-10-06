import { createBrowserRouter } from "react-router-dom";
import ScrollTop from "../share/ScrollTop/ScollTop";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
import ContactUs from "../pages/ContactUs/ContactUs";
import AllCampaignList from "../pages/AllCampaignList/AllCampaignList";
import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Users from "../../dashboard/pages/Users/Users";
import ProtectedRoute from "../../dashboard/layout/ProtectedRoute";
import Login from "../../dashboard/pages/auth/Login/Login";
import SignUp from "../../dashboard/pages/auth/SignUp/SignUp";
import UserDetails from "../../dashboard/pages/Users/UserDetails";
import Dashboard from "../../dashboard/pages/dashboard/Dashboard";
import EditUser from "../../dashboard/pages/Users/EditUser";
import Category from "../../dashboard/pages/Category/Category";
import Campaign from "../../dashboard/pages/Campaign/Campaign";
import CreateCategory from "../../dashboard/pages/Category/CreateCategory";
import CreateCampaign from "../../dashboard/pages/Campaign/CreateCampaign";
import AdminCampaignDetails from "../../dashboard/pages/Campaign/AdminCampaignDetails";
import CategoryDetails from "../../dashboard/pages/Category/CategoryDetails";
import EditCategory from "../../dashboard/pages/Category/EditCategory";
import EditCampaign from "../../dashboard/pages/Campaign/EditCampaign";
import BlogsData from "../../dashboard/pages/Blog/BlogsData";
import CreateBlog from "../../dashboard/pages/Blog/CreateBlog";
import BlogDetailsData from "../../dashboard/pages/Blog/BlogDetailsData";
import MainLayout from "../../dashboard/layout/MainLayout";
import adminPath from "./admin.routes";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import ForgotPassword from "../../dashboard/components/form/ForgotPassword";
import RecentBlogDetails from "../components/RecentBlogs/RecentBlogDetails";
import RecentBlogDetail from "../components/RecentBlogs/RecentBlogDetail";
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
  // {
  //   path: "/reset-password,
  //   element: <ResetPassword />,
  // },
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
