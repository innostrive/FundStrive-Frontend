import { Button, Title } from "../../Styles/Styles";
import Container from "../Container/Container";
import happy from "../../assets/glitter.png";
import volunteer from "../../assets/shirt.png";
import donation from "../../assets/cash.png";
import award from "../../assets/medal.png";
import { Link } from "react-router-dom";
import useAboutActivitySettings from "../../hooks/useAboutActivitySettings";
import AboutActivity from "./AboutActivity";
const AboutUs = () => {
  const [aboutActivity] = useAboutActivitySettings();
  const image = [happy, volunteer, donation, award];
  const combinedArray = aboutActivity.map((n, index) => ({
    name: n,
    image: image[index],
  }));

  console.log("combineArray:", combinedArray);
  return (
    <section id="about-us" className="py-20 scroll-mt-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-40 px-5 sm:px-0">
          <div className="space-y-8 sm:place-self-center">
            <Title title="About Us" className="text-left" />
            <p className="text-sm font-light leading-loose tracking-normal">
              Lorem ipsum dolor sit, amet consectetur dummy text. Distinctio est
              sint cumque non natus quidem iusto, pariatur voluptatem.
              Voluptates perspiciatis ex alias facilis fugit veniam quo nihil
              quasi, culpa possimus molestiae hic minus quas nesciunt
              accusantium sequi odio esse vero quia voluptatibus! Soluta
              recusandae id temporibus quaerat corrupti, alias modi.
            </p>
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
            {combinedArray.map((activity) => (
              <AboutActivity activity={activity} key={activity?._id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
