import Container from "../Container/Container";
import donation from "../../assets/donation-2.jpg";
import { Link } from "react-router-dom";
import { Button } from "../../Styles/Styles";
import IButton from "../../../dashboard/ui/IButton";
import { useState } from "react";
import { VolunteerForm } from "./VolunteerForm";
const JoinVolunteer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <section className="bg-secondary">
      <Container>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 place-items-center sm:px-0 px-5">
          <div className="space-y-4 sm:py-0 py-5">
            <h1 className="text-5xl font-medium sm:text-start text-center tracking-normal text-text-primary">
              Join as a volunteer
            </h1>
            <p className="text-sm font-normal sm:text-start text-center leading-normal text-text-primary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              quaerat voluptates id inventore adipisci ad.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
            <div className="absolute inset-0 grid place-items-center">
              <VolunteerForm open={open} handleOpen={handleOpen} />
            </div>
            <img src={donation} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinVolunteer;
