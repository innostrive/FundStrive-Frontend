import { useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const PartnerGalleryView = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [partnerImage, setPartnerImage] = useState({});
  useEffect(() => {
    axiosSecure.get(`/banners/${id}`).then((res) => {
      setPartnerImage(res.data.data);
    });
  }, [id]);
  return (
    <FormCard title="Partner Gallery">
      <div className="flex gap-5 flex-nowrap"></div>
    </FormCard>
  );
};

export default PartnerGalleryView;
