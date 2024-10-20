import Container from "../Container/Container";
import { Email, Phone } from "../../../dashboard/assets/icons/icons";
import { Link } from "react-router-dom";
import useNavMenus from "../../hooks/useNavMenus";
import TopNavInfo from "./TopNavInfo";
const TopNav = () => {
  const navmenues = useNavMenus();
  const navInfo = navmenues.filter((item) => item?.slug === "NAVINFO");
  return (
    <div className="w-full bg-[#f3f4f7]">
      <Container>
        {navInfo.map((info) => (
          <TopNavInfo info={info} key={info?._id} />
        ))}
      </Container>
    </div>
  );
};

export default TopNav;
