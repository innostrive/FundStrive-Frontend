import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";

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
  );
};

export default FaqDetails;
