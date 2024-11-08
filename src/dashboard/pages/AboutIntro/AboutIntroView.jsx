import React, { useEffect, useState } from "react";
import FormCard from "../../ui/FormCard";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const AboutIntroView = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const [intro, setIntro] = useState({});
  useEffect(() => {
    axios.get(`${URL}/settings/${id}`).then((res) => {
      setIntro(res.data.data);
    });
  }, []);
  const dashboardTranslations = getTranslationObject("dashboard");
  const { aboutIntro: aboutIntroT, aboutIntroDetails } =
    dashboardTranslations.aboutInfo;
  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/about-info" className="opacity-60">
          {aboutIntroT}
        </NavLink>
        <span className="cursor-context-menu">{aboutIntroDetails}</span>
      </Breadcrumbs>
      <FormCard title={aboutIntroDetails}>
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
