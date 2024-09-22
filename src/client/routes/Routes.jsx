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
  {
    path: "/dashboard/user-details/:id",
    element: (
      <ProtectedRoute>
        <UserDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/edit-user/:id",
    element: (
      <ProtectedRoute>
        <EditUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/category",
    element: (
      <ProtectedRoute>
        <Category />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/category/:id",
    element: (
      <ProtectedRoute>
        <CategoryDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/edit-category/:id",
    element: (
      <ProtectedRoute>
        <EditCategory />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/create-category",
    element: (
      <ProtectedRoute>
        <CreateCategory />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/campaign",
    element: (
      <ProtectedRoute>
        <Campaign />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/campaign/:id",
    element: (
      <ProtectedRoute>
        <AdminCampaignDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/edit-campaign/:id",
    element: (
      <ProtectedRoute>
        <EditCampaign />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/create-campaign",
    element: (
      <ProtectedRoute>
        <CreateCampaign />
      </ProtectedRoute>
    ),
  },
]);
