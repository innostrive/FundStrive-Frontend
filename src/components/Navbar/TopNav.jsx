import Container from "../Container/Container";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
const TopNav = () => {
  return (
    <div className="w-full bg-[#f3f4f7]">
      <Container>
        <div className="flex justify-between items-center w-full h-32">
          <div className="flex">
            <h1 className="text-3xl font-bold uppercase text-[#52565e]">
              Onobhoti
            </h1>
          </div>
          <div className="grid grid-rows-1 grid-flow-col items-center gap-3">
            <CiMail size={45} />
            <div>
              <h1 className="text-xl font-semibold">Email</h1>
              <span className="text-sm font-normal">contact@gmail.com</span>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-flow-col items-center gap-3">
            <BsTelephone size={35} />
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
