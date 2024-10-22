import Container from "../Container/Container";
import TopNavInfo from "./TopNavInfo";
import useTopNav from "../../hooks/useTopNav";
const TopNav = () => {
  const navmenues = useTopNav();
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
