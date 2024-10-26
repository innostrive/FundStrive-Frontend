import React, { useEffect, useState } from "react";
import FormCard from "../../ui/FormCard";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <FormCard title="About Intro">
      <div className="grid space-y-2 w-full border rounded my-5 p-5">
        <h1 className="text-lg font-medium text-secondary">{intro?.key}</h1>
        <p className="text-base font-light text-secondary tracking-wide leading-normal">
          {intro?.value}
        </p>
      </div>
    </FormCard>
  );
};

export default AboutIntroView;
