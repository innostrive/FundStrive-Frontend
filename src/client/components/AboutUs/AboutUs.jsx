import { Button, Title } from "../../Styles/Styles";
import Container from "../Container/Container";
import happy from "../../assets/glitter.png";
import volunteers from "../../assets/shirt.png";
import donations from "../../assets/cash.png";
import award from "../../assets/medal.png";
import { Link } from "react-router-dom";
import useAboutActivitySettings from "../../hooks/useAboutActivitySettings";
import AboutActivity from "./AboutActivity";
import useVolunteerData from "../../hooks/useVolunteerData";
import useAboutIntroData from "../../../dashboard/hooks/useAboutIntroData";
import useContactCount from "../../hooks/useContactCount";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const [aboutActivity] = useAboutActivitySettings();
  const [volunteer] = useVolunteerData();
  const [aboutIntro] = useAboutIntroData();
  const count = useContactCount();
  const about = aboutActivity.filter((item) => item.key === "Volunteer");
  const donation = aboutActivity.filter((item) => item.key === "Donation");

  if (about.length > 0 && donation.length > 0) {
    about[0].value = volunteer?.length;
    donation[0].value = count?.raised_amount;
  } else {
    console.error("No items found with the key 'Volunteer'");
  }

  const image = [happy, volunteers, donations, award];
  const combinedArray = aboutActivity.map((n, index) => ({
    name: n,
    image: image[index],
  }));

  return (
    <section id="about-us" className="py-20 scroll-mt-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 px-5 sm:px-0">
          <div className="space-y-8 sm:place-self-center">
            {aboutIntro.map((intro) => (
              <>
                <Title
                  title={intro?.key}
                  className="text-left"
                  key={intro?._id}
                />
                <p className="text-sm font-light leading-loose tracking-normal">
                  {intro?.value}
                </p>
              </>
            ))}
            <div>
              <Link to={"/about-us"}>
                {" "}
                <Button
                  label="Read Details"
                  className="bg-primary hover:bg-secondary duration-200 ease-in text-text-primary rounded-none uppercase"
                />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {combinedArray.map((activity, i) => (
              <AboutActivity activity={activity} key={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
