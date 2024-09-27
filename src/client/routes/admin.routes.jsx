import ProtectedRoute from "../../dashboard/layout/ProtectedRoute";
import BlogDetailsData from "../../dashboard/pages/Blog/BlogDetailsData";
import BlogsData from "../../dashboard/pages/Blog/BlogsData";
import BlogUpdate from "../../dashboard/pages/Blog/BlogUpdate";
import CreateBlog from "../../dashboard/pages/Blog/CreateBlog";
import AdminCampaignDetails from "../../dashboard/pages/Campaign/AdminCampaignDetails";
import Campaign from "../../dashboard/pages/Campaign/Campaign";
import CreateCampaign from "../../dashboard/pages/Campaign/CreateCampaign";
import EditCampaign from "../../dashboard/pages/Campaign/EditCampaign";
import Category from "../../dashboard/pages/Category/Category";
import CategoryDetails from "../../dashboard/pages/Category/CategoryDetails";
import CreateCategory from "../../dashboard/pages/Category/CreateCategory";
import EditCategory from "../../dashboard/pages/Category/EditCategory";
import Dashboard from "../../dashboard/pages/dashboard/Dashboard";
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
];

export default adminPath;