import { Navbar } from "@material-tailwind/react";
import Dropdown from "../components/Dropdown/Dropdown";
import LanguageSelector from "../../client/components/LanguageSelector/LanguageSelector";
const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div>
      <Navbar className="fixed inset-0 z-[999] w-full h-max rounded-none max-w-full shadow-none border border-b border-gray-300">
        <div className="flex items-center justify-between w-full px-10">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="ml-auto text-secondary h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="flex space-x-5 items-center">
            <LanguageSelector></LanguageSelector>
            <Dropdown />
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
