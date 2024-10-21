import ContactDetails from "../../dashboard/components/ContactDetails/ContactDetails";
import ProtectedRoute from "../../dashboard/layout/ProtectedRoute";
import AboutCampaignSettings from "../../dashboard/pages/AboutCampaignSettings/AboutCampaignSettings";
import CreateAboutSettings from "../../dashboard/pages/AboutCampaignSettings/CreateAboutSettings";
import EditAboutSettings from "../../dashboard/pages/AboutCampaignSettings/EditAboutSettings";
import AboutVision from "../../dashboard/pages/AboutVision/AboutVison";
import CreateAboutVision from "../../dashboard/pages/AboutVision/CreateAboutVision";
import EditAboutVision from "../../dashboard/pages/AboutVision/EditAboutVision";
import BlogDetailsData from "../../dashboard/pages/Blog/BlogDetailsData";
import BlogsData from "../../dashboard/pages/Blog/BlogsData";
import BlogUpdate from "../../dashboard/pages/Blog/BlogUpdate";
import CreateBlog from "../../dashboard/pages/Blog/CreateBlog";
import AdminCampaignDetails from "../../dashboard/pages/Campaign/AdminCampaignDetails";
import Campaign from "../../dashboard/pages/Campaign/Campaign";
import CampaignDocuments from "../../dashboard/pages/Campaign/CampaignDocuments";
import CampaignGallery from "../../dashboard/pages/Campaign/CampaignGallery";
import CreateCampaign from "../../dashboard/pages/Campaign/CreateCampaign";
import EditCampaign from "../../dashboard/pages/Campaign/EditCampaign";
import UploadDocument from "../../dashboard/pages/Campaign/UploadDocument";
import UploadGallery from "../../dashboard/pages/Campaign/UploadGallery";
import Category from "../../dashboard/pages/Category/Category";
import CategoryDetails from "../../dashboard/pages/Category/CategoryDetails";
import CreateCategory from "../../dashboard/pages/Category/CreateCategory";
import EditCategory from "../../dashboard/pages/Category/EditCategory";
import ContactInfo from "../../dashboard/pages/ContactInfo/ContactInfo";
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
import UserPrivilege from "../../dashboard/pages/UserPrivilege/UserPrivilege";
import UserProfile from "../../dashboard/pages/UserProfile/UserProfile";
import EditUser from "../../dashboard/pages/Users/EditUser";
import UserDetails from "../../dashboard/pages/Users/UserDetails";
import Users from "../../dashboard/pages/Users/Users";
const adminPath = [
  {
    name: "Dashboard",
    path: "",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "users",
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
  },
  {
    path: "user-details/:id",
    element: (
      <ProtectedRoute>
        <UserDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-user/:id",
    element: (
      <ProtectedRoute>
        <EditUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "profile",
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    ),
  },

  {
    name: "Category List",
    path: "category",
    element: (
      <ProtectedRoute>
        <Category />
      </ProtectedRoute>
    ),
  },
  {
    name: "Category Details",
    path: "category/:id",
    element: (
      <ProtectedRoute>
        <CategoryDetails />
      </ProtectedRoute>
    ),
  },
  {
    name: "Category List",
    path: "edit-category/:id",
    element: (
      <ProtectedRoute>
        <EditCategory />
      </ProtectedRoute>
    ),
  },
  {
    name: "Create Category",
    path: "create-category",
    element: (
      <ProtectedRoute>
        <CreateCategory />
      </ProtectedRoute>
    ),
  },

  {
    path: "campaign",
    element: (
      <ProtectedRoute>
        <Campaign />
      </ProtectedRoute>
    ),
  },
  {
    path: "campaign/:id",
    element: (
      <ProtectedRoute>
        <AdminCampaignDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-campaign/:id",
    element: (
      <ProtectedRoute>
        <EditCampaign />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-campaign",
    element: (
      <ProtectedRoute>
        <CreateCampaign />
      </ProtectedRoute>
    ),
  },
  {
    path: "campaign-gallery",
    element: (
      <ProtectedRoute>
        <CampaignGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "campaign-documents",
    element: (
      <ProtectedRoute>
        <CampaignDocuments />
      </ProtectedRoute>
    ),
  },
  {
    path: "upload-gallery/:id",
    element: (
      <ProtectedRoute>
        <UploadGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "upload-document/:id",
    element: (
      <ProtectedRoute>
        <UploadDocument />
      </ProtectedRoute>
    ),
  },
  {
    path: "blogs",
    element: (
      <ProtectedRoute>
        <BlogsData />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-blog",
    element: (
      <ProtectedRoute>
        <CreateBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "blog/:id",
    element: (
      <ProtectedRoute>
        <BlogDetailsData />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-blog/:id",
    element: (
      <ProtectedRoute>
        <BlogUpdate />
      </ProtectedRoute>
    ),
  },
  {
    path: "menu-settings",
    element: (
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-settings",
    element: (
      <ProtectedRoute>
        <CreateSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "settings/:id",
    element: (
      <ProtectedRoute>
        <SettingsInfo />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-settings/:id",
    element: (
      <ProtectedRoute>
        <EditSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "top-navbar",
    element: (
      <ProtectedRoute>
        <TopNavbarInfo />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-topnavInfo",
    element: (
      <ProtectedRoute>
        <CreateNavInfo />
      </ProtectedRoute>
    ),
  },
  {
    path: "topnavInfo-details",
    element: (
      <ProtectedRoute>
        <TopNavInfoDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-emailInfo/:id",
    element: (
      <ProtectedRoute>
        <EditEmail />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-phoneInfo/:id",
    element: (
      <ProtectedRoute>
        <EditPhone />
      </ProtectedRoute>
    ),
  },
  {
    path: "banner-list",
    element: (
      <ProtectedRoute>
        <BannerSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-banner",
    element: (
      <ProtectedRoute>
        <CreateBanner />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-banner/:id",
    element: (
      <ProtectedRoute>
        <EditBanner />
      </ProtectedRoute>
    ),
  },
  {
    path: "banner/:id",
    element: (
      <ProtectedRoute>
        <BannerInfo />
      </ProtectedRoute>
    ),
  },
  {
    path: "partner-gallery",
    element: (
      <ProtectedRoute>
        <PrtnerGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-partner",
    element: (
      <ProtectedRoute>
        <CreatePartner />
      </ProtectedRoute>
    ),
  },
  {
    path: "partner-gallery-view/:id",
    element: (
      <ProtectedRoute>
        <PartnerGalleryView />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-partner-gallery/:id",
    element: (
      <ProtectedRoute>
        <EditPartnerGallery />
      </ProtectedRoute>
    ),
  },
  {
    path: "user-privilege",
    element: (
      <ProtectedRoute>
        <UserPrivilege />
      </ProtectedRoute>
    ),
  },
  {
    path: "contact-info",
    element: (
      <ProtectedRoute>
        <ContactInfo />
      </ProtectedRoute>
    ),
  },
  {
    path: "contact-details/:id",
    element: (
      <ProtectedRoute>
        <ContactDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "faq-settings",
    element: (
      <ProtectedRoute>
        <FAQ />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-faq",
    element: (
      <ProtectedRoute>
        <CreateFaq />
      </ProtectedRoute>
    ),
  },
  {
    path: "faq-details/:id",
    element: (
      <ProtectedRoute>
        <FaqDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-faq/:id",
    element: (
      <ProtectedRoute>
        <EditFaq />
      </ProtectedRoute>
    ),
  },
  {
    path: "subscribers-list",
    element: (
      <ProtectedRoute>
        <Subscribers />
      </ProtectedRoute>
    ),
  },
  {
    path: "about-settings",
    element: (
      <ProtectedRoute>
        <AboutCampaignSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-about-settings",
    element: (
      <ProtectedRoute>
        <CreateAboutSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-about-settings/:id",
    element: (
      <ProtectedRoute>
        <EditAboutSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "about-vision",
    element: (
      <ProtectedRoute>
        <AboutVision />
      </ProtectedRoute>
    ),
  },
  {
    path: "create-about-vision",
    element: (
      <ProtectedRoute>
        <CreateAboutVision />
      </ProtectedRoute>
    ),
  },
  {
    path: "edit-about-vision/:id",
    element: (
      <ProtectedRoute>
        <EditAboutVision />
      </ProtectedRoute>
    ),
  },
];

export default adminPath;
