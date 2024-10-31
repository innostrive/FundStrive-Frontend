import { createBrowserRouter } from "react-router-dom";
// import ScrollTop from "../share/ScrollTop/ScollTop";
// import Layout from "../components/layout/Layout";
// import Home from "../pages/Home/Home";
// import AboutUsDetails from "../components/AboutUsDetails/AboutUsDetails";
// import ContactUs from "../pages/ContactUs/ContactUs";
// import AllCampaignList from "../pages/AllCampaignList/AllCampaignList";
// import CampaignDetails from "../components/CampaignDetails/CampaignDetails";
// import BlogDetails from "../components/BlogDetails/BlogDetails";
// import ProtectedRoute from "../../dashboard/layout/ProtectedRoute";
// import Login from "../../dashboard/pages/auth/Login/Login";
// import SignUp from "../../dashboard/pages/auth/SignUp/SignUp";
// import MainLayout from "../../dashboard/layout/MainLayout";
// import adminPath from "./admin.routes";
// import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
// import RecentBlogDetail from "../components/RecentBlogs/RecentBlogDetail";
// import PaymentSuccessfull from "../pages/PaymentSuccessfull/PaymentSuccessfull";
// import AboutCampaignSettings from "../../dashboard/pages/AboutCampaignSettings/AboutCampaignSettings";
// import AboutDetails from "../../dashboard/pages/AboutDetails/AboutDetails";
// import AboutHeaderInfo from "../../dashboard/pages/AboutDetails/AboutHeaderInfo";
// import AboutHeaderInfoView from "../../dashboard/pages/AboutDetails/AboutHeaderInfoView";
// import AboutMissionInfo from "../../dashboard/pages/AboutDetails/AboutMissionInfo";
// import AboutMissionInfoView from "../../dashboard/pages/AboutDetails/AboutMissionInfoView";
// import AboutInfo from "../../dashboard/pages/AboutInfo/AboutInfo";
// import AboutIntroView from "../../dashboard/pages/AboutIntro/AboutIntroView";
// import AboutVision from "../../dashboard/pages/AboutVision/AboutVison";
// import BlogDetailsData from "../../dashboard/pages/Blog/BlogDetailsData";
// import BlogsData from "../../dashboard/pages/Blog/BlogsData";
// import BlogUpdate from "../../dashboard/pages/Blog/BlogUpdate";
// import CreateBlog from "../../dashboard/pages/Blog/CreateBlog";
// import AdminCampaignDetails from "../../dashboard/pages/Campaign/AdminCampaignDetails";
// import Campaign from "../../dashboard/pages/Campaign/Campaign";
// import CampaignGallery from "../../dashboard/pages/Campaign/CampaignGallery";
// import CampaignGalleryView from "../../dashboard/pages/Campaign/CampaignGalleryView";
// import CreateCampaign from "../../dashboard/pages/Campaign/CreateCampaign";
// import DocumentsView from "../../dashboard/pages/Campaign/DocumentsView";
// import EditCampaign from "../../dashboard/pages/Campaign/EditCampaign";
// import UploadDocument from "../../dashboard/pages/Campaign/UploadDocument";
// import UploadGallery from "../../dashboard/pages/Campaign/UploadGallery";
// import Category from "../../dashboard/pages/Category/Category";
// import CategoryDetails from "../../dashboard/pages/Category/CategoryDetails";
// import CreateCategory from "../../dashboard/pages/Category/CreateCategory";
// import EditCategory from "../../dashboard/pages/Category/EditCategory";
// import ContactInfo from "../../dashboard/pages/ContactInfo/ContactInfo";
// import ContactDetails from "../../dashboard/components/ContactDetails/ContactDetails";
// import CreateUser from "../../dashboard/components/UserList/CreateUser";
// import Dashboard from "../../dashboard/pages/dashboard/Dashboard";
// import CreateFaq from "../../dashboard/pages/FAQ/CreateFaq";
// import EditFaq from "../../dashboard/pages/FAQ/EditFaq";
// import FAQ from "../../dashboard/pages/FAQ/FAQ";
// import FaqDetails from "../../dashboard/pages/FAQ/FaqDetails";
// import CreatePartner from "../../dashboard/pages/PartnerGallery/CreatePartner";
// import EditPartnerGallery from "../../dashboard/pages/PartnerGallery/EditPartnerGallery";
// import PrtnerGallery from "../../dashboard/pages/PartnerGallery/PartnerGallery";
// import PartnerGalleryView from "../../dashboard/pages/PartnerGallery/PartnerGalleryView";
// import BannerInfo from "../../dashboard/pages/Settings/BannerSettings/BannerInfo";
// import BannerSettings from "../../dashboard/pages/Settings/BannerSettings/BannerSettings";
// import CreateBanner from "../../dashboard/pages/Settings/BannerSettings/CreateBanner";
// import EditBanner from "../../dashboard/pages/Settings/BannerSettings/EditBanner";
// import CreateSettings from "../../dashboard/pages/Settings/CreateSettings";
// import EditSettings from "../../dashboard/pages/Settings/EditSettings";
// import Settings from "../../dashboard/pages/Settings/Settings";
// import SettingsInfo from "../../dashboard/pages/Settings/SettingsInfo";
// import CreateNavInfo from "../../dashboard/pages/Settings/TopNavbarInfo/CreateNavInfo";
// import EditEmail from "../../dashboard/pages/Settings/TopNavbarInfo/EditEmail";
// import EditPhone from "../../dashboard/pages/Settings/TopNavbarInfo/EditPhone";
// import TopNavbarInfo from "../../dashboard/pages/Settings/TopNavbarInfo/TopNavbarInfo";
// import TopNavInfoDetails from "../../dashboard/pages/Settings/TopNavbarInfo/TopNavInfoDetails";
// import Subscribers from "../../dashboard/pages/Subscribers/Subscribers";
// import EditLogo from "../../dashboard/pages/UploadLogo/EditLogo";
// import UploadLogo from "../../dashboard/pages/UploadLogo/UploadLogo";
// import UserPrivilege from "../../dashboard/pages/UserPrivilege/UserPrivilege";
// import UserProfile from "../../dashboard/pages/UserProfile/UserProfile";
// import EditUser from "../../dashboard/pages/Users/EditUser";
// import UserDetails from "../../dashboard/pages/Users/UserDetails";
// import Users from "../../dashboard/pages/Users/Users";
// import WebsiteLogo from "../../dashboard/pages/WebsiteLogo/WebsiteLogo";
// import AboutCampaignSettings from "../../dashboard/pages/AboutCampaignSettings/AboutCampaignSettings";
// import CreateAboutSettings from "../../dashboard/pages/AboutCampaignSettings/CreateAboutSettings";
// import EditAboutSettings from "../../dashboard/pages/AboutCampaignSettings/EditAboutSettings";
// import CreateAboutHeaderInfo from "../../dashboard/pages/AboutDetails/CreateAboutHeaderInfo";
// import CreateAboutMission from "../../dashboard/pages/AboutDetails/CreateAboutMission";
// import EditAboutHeaderInfo from "../../dashboard/pages/AboutDetails/EditAboutHeaderInfo";
// import EditAboutMissionInfo from "../../dashboard/pages/AboutDetails/EditAboutMissionInfo";
// import CreateAboutVision from "../../dashboard/pages/AboutVision/CreateAboutVision";
// import EditAboutVision from "../../dashboard/pages/AboutVision/EditAboutVision";
// import CreateAboutSettings from "../../dashboard/pages/AboutCampaignSettings/CreateAboutSettings";
// import EditAboutSettings from "../../dashboard/pages/AboutCampaignSettings/EditAboutSettings";
// import ContactDetails from "../../dashboard/components/ContactDetails/ContactDetails";
// import CreateUser from "../../dashboard/components/UserList/CreateUser";
// import ProtectedRoute from "../../dashboard/layout/ProtectedRoute";
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
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import RecentBlogDetail from "../components/RecentBlogs/RecentBlogDetail";
import PaymentSuccessfull from "../pages/PaymentSuccessfull/PaymentSuccessfull";
import AboutCampaignSettings from "../../dashboard/pages/AboutCampaignSettings/AboutCampaignSettings";
import AboutHeaderInfo from "../../dashboard/pages/AboutDetails/AboutHeaderInfo";
import AboutHeaderInfoView from "../../dashboard/pages/AboutDetails/AboutHeaderInfoView";
import AboutMissionInfo from "../../dashboard/pages/AboutDetails/AboutMissionInfo";
import AboutMissionInfoView from "../../dashboard/pages/AboutDetails/AboutMissionInfoView";
import AboutInfo from "../../dashboard/pages/AboutInfo/AboutInfo";
import AboutIntroView from "../../dashboard/pages/AboutIntro/AboutIntroView";
import AboutVision from "../../dashboard/pages/AboutVision/AboutVison";
import BlogDetailsData from "../../dashboard/pages/Blog/BlogDetailsData";
import BlogsData from "../../dashboard/pages/Blog/BlogsData";
import BlogUpdate from "../../dashboard/pages/Blog/BlogUpdate";
import CreateBlog from "../../dashboard/pages/Blog/CreateBlog";
import AdminCampaignDetails from "../../dashboard/pages/Campaign/AdminCampaignDetails";
import Campaign from "../../dashboard/pages/Campaign/Campaign";
import CampaignGallery from "../../dashboard/pages/Campaign/CampaignGallery";
import CampaignGalleryView from "../../dashboard/pages/Campaign/CampaignGalleryView";
import CreateCampaign from "../../dashboard/pages/Campaign/CreateCampaign";
import DocumentsView from "../../dashboard/pages/Campaign/DocumentsView";
import EditCampaign from "../../dashboard/pages/Campaign/EditCampaign";
import UploadDocument from "../../dashboard/pages/Campaign/UploadDocument";
import UploadGallery from "../../dashboard/pages/Campaign/UploadGallery";
import Category from "../../dashboard/pages/Category/Category";
import CategoryDetails from "../../dashboard/pages/Category/CategoryDetails";
import CreateCategory from "../../dashboard/pages/Category/CreateCategory";
import EditCategory from "../../dashboard/pages/Category/EditCategory";
import ContactInfo from "../../dashboard/pages/ContactInfo/ContactInfo";
import ContactDetails from "../../dashboard/components/ContactDetails/ContactDetails";
import CreateUser from "../../dashboard/components/UserList/CreateUser";
import Dashboard from "../../dashboard/pages/dashboard/Dashboard";
import CreateFaq from "../../dashboard/pages/FAQ/CreateFaq";
import EditFaq from "../../dashboard/pages/FAQ/EditFaq";
import FAQ from "../../dashboard/pages/FAQ/FAQ";
import FaqDetails from "../../dashboard/pages/FAQ/FaqDetails";
import CreatePartner from "../../dashboard/pages/PartnerGallery/CreatePartner";
import EditPartnerGallery from "../../dashboard/pages/PartnerGallery/EditPartnerGallery";
import PrtnerGallery from "../../dashboard/pages/PartnerGallery/PartnerGallery";
import PartnerGalleryView from "../../dashboard/pages/PartnerGallery/PartnerGalleryView";
import BannerInfo from "../../dashboard/pages/Settings/BannerSettings/BannerInfo";
import BannerSettings from "../../dashboard/pages/Settings/BannerSettings/BannerSettings";
import CreateBanner from "../../dashboard/pages/Settings/BannerSettings/CreateBanner";
import EditBanner from "../../dashboard/pages/Settings/BannerSettings/EditBanner";
import CreateSettings from "../../dashboard/pages/Settings/CreateSettings";
import EditSettings from "../../dashboard/pages/Settings/EditSettings";
import Settings from "../../dashboard/pages/Settings/Settings";
import SettingsInfo from "../../dashboard/pages/Settings/SettingsInfo";
import CreateNavInfo from "../../dashboard/pages/Settings/TopNavbarInfo/CreateNavInfo";
import EditEmail from "../../dashboard/pages/Settings/TopNavbarInfo/EditEmail";
import EditPhone from "../../dashboard/pages/Settings/TopNavbarInfo/EditPhone";
import TopNavbarInfo from "../../dashboard/pages/Settings/TopNavbarInfo/TopNavbarInfo";
import TopNavInfoDetails from "../../dashboard/pages/Settings/TopNavbarInfo/TopNavInfoDetails";
import Subscribers from "../../dashboard/pages/Subscribers/Subscribers";
import EditLogo from "../../dashboard/pages/UploadLogo/EditLogo";
import UploadLogo from "../../dashboard/pages/UploadLogo/UploadLogo";
import UserPrivilege from "../../dashboard/pages/UserPrivilege/UserPrivilege";
import UserProfile from "../../dashboard/pages/UserProfile/UserProfile";
import EditUser from "../../dashboard/pages/Users/EditUser";
import UserDetails from "../../dashboard/pages/Users/UserDetails";
import Users from "../../dashboard/pages/Users/Users";
import WebsiteLogo from "../../dashboard/pages/WebsiteLogo/WebsiteLogo";
import CreateAboutSettings from "../../dashboard/pages/AboutCampaignSettings/CreateAboutSettings";
import EditAboutSettings from "../../dashboard/pages/AboutCampaignSettings/EditAboutSettings";
import CreateAboutHeaderInfo from "../../dashboard/pages/AboutDetails/CreateAboutHeaderInfo";
import CreateAboutMission from "../../dashboard/pages/AboutDetails/CreateAboutMission";
import EditAboutHeaderInfo from "../../dashboard/pages/AboutDetails/EditAboutHeaderInfo";
import EditAboutMissionInfo from "../../dashboard/pages/AboutDetails/EditAboutMissionInfo";
import CreateAboutVision from "../../dashboard/pages/AboutVision/CreateAboutVision";
import EditAboutVision from "../../dashboard/pages/AboutVision/EditAboutVision";
import EditAboutIntro from "../../dashboard/pages/AboutIntro/EditAboutIntro";
import DashboardLayout from "../../dashboard/layout/DashboardLayout";
import EditNavbarLogo from "../../dashboard/pages/WebsiteLogo/EditNavbarLogo";
import EditFooterLogo from "../../dashboard/pages/WebsiteLogo/EditFooterLogo";

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
    path: "/success",
    element: <PaymentSuccessfull />,
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
    path: "admin-dashboard/users",
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/users/create-user",
    element: (
      <ProtectedRoute>
        <CreateUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/users/user-details/:id",
    element: (
      <ProtectedRoute>
        <UserDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/users/edit-user/:id",
    element: (
      <ProtectedRoute>
        <EditUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/profile",
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    ),
  },

  {
    name: "Category List",
    path: "admin-dashboard/categories",
    element: (
      <ProtectedRoute>
        <Category />
      </ProtectedRoute>
    ),
  },
  {
    name: "Category Details",
    path: "admin-dashboard/categories/category-details/:id",
    element: (
      <ProtectedRoute>
        <CategoryDetails />
      </ProtectedRoute>
    ),
  },
  {
    name: "Category List",
    path: "admin-dashboard/categories/edit-category/:id",
    element: (
      <ProtectedRoute>
        <EditCategory />
      </ProtectedRoute>
    ),
  },
  {
    name: "Create Category",
    path: "admin-dashboard/categories/create-category",
    element: (
      <ProtectedRoute>
        <CreateCategory />
      </ProtectedRoute>
    ),
  },

  {
    path: "admin-dashboard/campaigns",
    element: (
      <ProtectedRoute>
        <Campaign />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/campaigns/campaign-details/:id",
    element: (
      <ProtectedRoute>
        <AdminCampaignDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/campaigns/edit-campaign/:id",
    element: (
      <ProtectedRoute>
        <EditCampaign />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/campaigns/create-campaign",
    element: (
      <ProtectedRoute>
        <CreateCampaign />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/campaigns/campaign-gallery/:id",
    element: (
      <ProtectedRoute>
        <CampaignGalleryView />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "admin-dashboard/campaign-gallery",
  //   element: (
  //     <ProtectedRoute>
  //       <CampaignGallery />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "admin-dashboard/campaign-documents/:id",
    element: (
      <ProtectedRoute>
        <DocumentsView />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/upload-gallery/:id",
    element: (
      <ProtectedRoute>
        <UploadGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/upload-document/:id",
    element: (
      <ProtectedRoute>
        <UploadDocument />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/blogs",
    element: (
      <ProtectedRoute>
        <BlogsData />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/blogs/create-blog",
    element: (
      <ProtectedRoute>
        <CreateBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/blogs/blog-details/:id",
    element: (
      <ProtectedRoute>
        <BlogDetailsData />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/blogs/edit-blog/:id",
    element: (
      <ProtectedRoute>
        <BlogUpdate />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/navmenus",
    element: (
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "admin-dashboard/create-settings",
  //   element: (
  //     <ProtectedRoute>
  //       <CreateSettings />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "admin-dashboard/navmenus/navmenu-details/:id",
    element: (
      <ProtectedRoute>
        <SettingsInfo />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/navmenus/edit-navmenu/:id",
    element: (
      <ProtectedRoute>
        <EditSettings />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "admin-dashboard/top-navbar",
  //   element: (
  //     <ProtectedRoute>
  //       <TopNavbarInfo />
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "admin-dashboard/create-topnavInfo",
  //   element: (
  //     <ProtectedRoute>
  //       <CreateNavInfo />
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "admin-dashboard/topnavInfo-details",
  //   element: (
  //     <ProtectedRoute>
  //       <TopNavInfoDetails />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "admin-dashboard/navmenus/top-navbar-edit-emailInfo/:id",
    element: (
      <ProtectedRoute>
        <EditEmail />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/navmenus/top-navbar-edit-phoneInfo/:id",
    element: (
      <ProtectedRoute>
        <EditPhone />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/banners",
    element: (
      <ProtectedRoute>
        <BannerSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/banners/upload-carusel",
    element: (
      <ProtectedRoute>
        <CreateBanner />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/banners/edit-carusel/:id",
    element: (
      <ProtectedRoute>
        <EditBanner />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/banners/carusel-details/:id",
    element: (
      <ProtectedRoute>
        <BannerInfo />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/banners/partner-gallery",
    element: (
      <ProtectedRoute>
        <PrtnerGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/banners/create-partner",
    element: (
      <ProtectedRoute>
        <CreatePartner />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/banners/partner-gallery-view/:id",
    element: (
      <ProtectedRoute>
        <PartnerGalleryView />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/banners/edit-partner-gallery/:id",
    element: (
      <ProtectedRoute>
        <EditPartnerGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/user-privilege",
    element: (
      <ProtectedRoute>
        <UserPrivilege />
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/contact-info",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <ContactInfo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/contact-info/contact-details/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <ContactDetails />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/faq",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <FAQ />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/faq/create-faq",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <CreateFaq />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/faq/faq-details/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <FaqDetails />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/faq/edit-faq/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditFaq />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/subscribers-list",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <Subscribers />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "admin-dashboard/about-settings",
  //   element: (
  //     <ProtectedRoute>
  //       <DashboardLayout>
  //         <AboutCampaignSettings />
  //       </DashboardLayout>
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "admin-dashboard/about-info",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <AboutInfo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/create-about-settings",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <CreateAboutSettings />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/edit-about-settings/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditAboutSettings />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/about-intro-details/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <AboutIntroView />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/edit-about-intro/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditAboutIntro />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "admin-dashboard/about-info/about-vision",
  //   element: (
  //     <ProtectedRoute>
  //       <DashboardLayout>
  //         <AboutVision />
  //       </DashboardLayout>
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "admin-dashboard/about-info/create-about-vision",
  //   element: (
  //     <ProtectedRoute>
  //       <DashboardLayout>
  //         <CreateAboutVision />
  //       </DashboardLayout>
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "admin-dashboard/about-info/edit-about-vision/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditAboutVision />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/create-about-headerInfo",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <CreateAboutHeaderInfo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/about-headerInfo",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <AboutHeaderInfo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/about-headerInfo-details/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <AboutHeaderInfoView />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/edit-about-headerInfo/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditAboutHeaderInfo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/about-missionInfo",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <AboutMissionInfo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/about-missionInfo-details/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <AboutMissionInfoView />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/edit-about-missionInfo/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditAboutMissionInfo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/about-info/create-about-mission",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <CreateAboutMission />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: "admin-dashboard/website-logo",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <WebsiteLogo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "admin-dashboard/upload-logo",
  //   element: (
  //     <ProtectedRoute>
  //       <UploadLogo />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "admin-dashboard/website-logo/update-navbar-logo/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditNavbarLogo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/website-logo/update-footer-logo/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditFooterLogo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "admin-dashboard/website-logo/update-logo/:id",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <EditLogo />
        </DashboardLayout>
      </ProtectedRoute>
    ),
  },
]);
