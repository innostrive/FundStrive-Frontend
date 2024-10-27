import Container from "../Container/Container";
import donation from "../../assets/donation-2.jpg";
import { useState } from "react";
import { VolunteerForm } from "./VolunteerForm";
import { useTranslation } from "react-i18next";
const JoinVolunteer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const { t } = useTranslation();
  const title = t("componentTitle.joinVolunteerTitle");
  return (
    <section className="bg-secondary">
      <Container>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 place-items-center sm:px-0 px-5">
          <div className="space-y-5 sm:py-0 py-5">
            <h1 className="text-5xl font-medium sm:text-start text-center tracking-normal text-text-primary">
              {title}
            </h1>
            <p className="text-sm font-normal sm:text-start text-center leading-normal text-text-primary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              quaerat voluptates id inventore adipisci ad.
            </p>
            <VolunteerForm open={open} handleOpen={handleOpen} />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
            <img src={donation} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinVolunteer;
