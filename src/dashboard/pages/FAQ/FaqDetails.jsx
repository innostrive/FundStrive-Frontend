import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { Breadcrumbs } from "@material-tailwind/react";

const FaqDetails = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const [faqDetails, setFaqDetails] = useState({});

  useEffect(() => {
    axios.get(`${URL}/settings/${id}`).then((res) => {
      setFaqDetails(res.data.data);
    });
  }, []);

  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/faq" className="opacity-60">
          FAQ
        </NavLink>
        <span className="cursor-context-menu">Faq Details</span>
      </Breadcrumbs>
      <FormCard title="FAQ Details">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-secondary">
              {faqDetails?.key}
            </span>
            <span
              className={
                faqDetails?.status === "Inactive"
                  ? "text-sm font-normal text-red-500"
                  : "text-sm font-normal text-green-500"
              }
            >
              {faqDetails?.status}
            </span>
          </div>
          <div className="text-sm font-light tracking-wide leading-normal text-secondary">
            <p>{faqDetails?.value}</p>
          </div>
        </div>
      </FormCard>
    </section>
  );
};

export default FaqDetails;
