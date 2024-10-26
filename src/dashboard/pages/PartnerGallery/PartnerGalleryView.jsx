import { useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const PartnerGalleryView = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [partnerImage, setPartnerImage] = useState({});
  useEffect(() => {
    axiosSecure.get(`/banners/${id}`).then((res) => {
      setPartnerImage(res.data.data);
    });
  }, [id]);
  return (
    <FormCard title="Partner Gallery">
      <div className="flex mx-auto my-5">
        <img
          src={imageUrl + partnerImage?.image}
          crossOrigin="anonymous"
          alt=""
          className="h-32 w-44 object-contain"
        />
      </div>
    </FormCard>
  );
};

export default PartnerGalleryView;
