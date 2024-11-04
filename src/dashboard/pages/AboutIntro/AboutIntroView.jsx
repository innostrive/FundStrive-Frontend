import React, { useEffect, useState } from "react";
import FormCard from "../../ui/FormCard";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Breadcrumbs } from "@material-tailwind/react";

const AboutIntroView = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const [intro, setIntro] = useState({});
  useEffect(() => {
    axios.get(`${URL}/settings/${id}`).then((res) => {
      setIntro(res.data.data);
    });
  }, []);
  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/about-info" className="opacity-60">
          About Info
        </NavLink>
        <span className="cursor-context-menu">About Intro Details</span>
      </Breadcrumbs>
      <FormCard title="About Intro">
        <div className="grid space-y-2 w-full border rounded my-5 p-5">
          <h1 className="text-lg font-medium text-secondary">{intro?.key}</h1>
          <p className="text-base font-light text-secondary tracking-wide leading-normal">
            {intro?.value}
          </p>
        </div>
      </FormCard>
    </section>
  );
};

export default AboutIntroView;
