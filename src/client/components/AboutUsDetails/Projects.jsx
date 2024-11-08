import Container from "../Container/Container";
import happy from "../../assets/glitter.png";
import volunteers from "../../assets/shirt.png";
import donations from "../../assets/cash.png";
import award from "../../assets/medal.png";
import useAboutActivitySettings from "../../hooks/useAboutActivitySettings";
import useVolunteerData from "../../hooks/useVolunteerData";
import useContactCount from "../../hooks/useContactCount";
const Projects = () => {
  const [aboutActivity] = useAboutActivitySettings();
  const color = ["#2B2A27", "#f47721", "#6295A2", "#7469B6"];
  const image = [happy, award, volunteers, donations];
  const count = useContactCount();
  const [volunteer] = useVolunteerData();
  const about = aboutActivity.filter((item) => item.key === "Volunteer");
  const donation = aboutActivity.filter((item) => item.key === "Donation");

  if (about.length > 0 && donation.length > 0) {
    about[0].value = volunteer?.length;
    donation[0].value = count?.raised_amount;
  } else {
  }

  const combinedArray = aboutActivity.map((n, index) => ({
    name: n,
    color: color[index],
    image: image[index],
  }));
  return (
    <section className="py-20 bg-[#caccd1]">
      <Container>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:px-0 px-5">
          {combinedArray.map((activity, i) => (
            <div
              key={i}
              className="h-auto w-auto p-10 rounded-md grid place-content-center place-items-center gap-2"
              style={{ backgroundColor: activity?.color }}
            >
              <img src={activity?.image} alt="" className="h-12 w-12" />
              <span className="text-2xl font-bold text-[#f3f4f7]">
                {activity?.name?.value}+
              </span>
              <p className="text-sm font-light text-[#f3f4f7] tracking-normal">
                {activity?.name?.key}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
