import Container from "../Container/Container";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import Logo from "../../assets/Logo/Logo.jpg";
import { Email, Phone } from "../../../dashboard/assets/icons/icons";
const TopNav = () => {
  return (
    <div className="w-full bg-[#f3f4f7]">
      <Container>
        <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center w-full h-56 sm:h-32 sm:py-0 py-5 gap-5">
          <div className="flex gap-2 items-center">
            <h1 className="text-3xl font-bold uppercase text-secondary">
              Fund<span className="text-primary">strive</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Email />
            <div>
              <h1 className="text-xl font-semibold">Email</h1>
              <span className="text-sm font-normal">contact@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone />
            <div>
              <h1 className="text-xl font-semibold">Phone</h1>
              <span className="text-sm font-normal">+880 6165488</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
