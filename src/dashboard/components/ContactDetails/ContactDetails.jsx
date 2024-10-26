import { useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ContactDetails = () => {
  const { id } = useParams();
  const [contactInfo, setContactInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/api/contact-us/${id}`).then((res) => {
      if (res.status === 200) {
        setContactInfo(res.data.data);
      }
    });
  }, []);

  const payload = {
    is_read: true,
  };
  axiosSecure.put(`/api/contact-us/${id}`, payload).then((res) => {
    // console.log(res.data.message);
  });

  return (
    <FormCard title="Contact Details" className="space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold text-black">
            {contactInfo?.name}
          </span>
          <span className="text-sm font-light text-black">
            {contactInfo?.email}
          </span>
        </div>
        <div className="text-base font-semibold text-black">
          <span>{contactInfo?.phone}</span>
        </div>
      </div>
      <div>
        <p className="text-lg font-light tracking-wide text-black">
          {contactInfo?.message}
        </p>
      </div>
    </FormCard>
  );
};

export default ContactDetails;
