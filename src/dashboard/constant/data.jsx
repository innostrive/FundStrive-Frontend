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
  { id: 3, name: "Settings", icon: "⚙️" },
  { id: 4, name: "Profile", icon: "👤" },
  { id: 5, name: "Messages", icon: "💬" },
  { id: 6, name: "Logout", icon: "🚪" },
];
