import Dropdown from "../components/Dropdown/Dropdown";
import Logo from "../../dashboard/assets/Logo/Logo.jpg";
const Header = () => {
  return (
    <nav className="w-full h-24 border border-b border-gray-200 bg-white shadow-sm fixed z-10">
      <div className="flex items-center justify-between px-4 w-full h-full">
        <div className="flex gap-2 items-center w-full h-full">
          <span className="uppercase text-xl font-semibold text-black tracking-normal">
            Fund<span className="text-blue-400">strive</span>
          </span>
          <img
            src={Logo}
            className="h-10 w-10 object-cover rounded-full"
            alt="Logo"
          />
        </div>
        <div className="flex items-center justify-center -mr-52 w-full h-full">
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
