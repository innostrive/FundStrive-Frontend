export const menuItems = [
  { id: 1, name: "Dashboard", icon: "📊", link: "/dashboard" },
  {
    id: 2,
    name: "Users",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    link: "/dashboard/users",
  },
  {
    id: 3,
    name: "Category",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-layers size-7"
      >
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    ),
    link: "/dashboard/category",
  },
  {
    id: 4,
    name: "Campaign",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-bullhorn size-7"
      >
        <path d="M18 13v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"></path>
        <path d="M23 5v10c0 1.1-.9 2-2 2h-7l-4 4V3l4 4h7c1.1 0 2 .9 2 2z"></path>
      </svg>
    ),
    link: "/dashboard/campaign",
  },
  { id: 5, name: "Logout", icon: "🚪" },
];
