import { menuItems } from "./MenuItem";
import TopNav from "./TopNav";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <TopNav />
      <div className="bg-[#2B2A27]">
        <Container>
          <div className="w-full h-16 flex justify-between">
            <div className="flex items-center justify-center gap-10">
              {menuItems.map((item, i) => (
                <>
                  <a
                    href={item.link}
                    key={i}
                    className="text-sm tracking-normal uppercase font-normal cursor-pointer text-[#f3f4f7] flex items-center justify-center gap-4"
                  >
                    {item?.label}
                  </a>
                </>
              ))}
            </div>
            <Link className="text-sm uppercase font-medium px-4 cursor-pointer text-white bg-[#f47721] h-full flex items-center justify-center gap-4">
              Donate
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
