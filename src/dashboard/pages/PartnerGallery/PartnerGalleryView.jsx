import { NavLink, useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import { Breadcrumbs } from "@material-tailwind/react";

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
    <DashboardLayout>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/banners" className="opacity-60">
          Banners
        </NavLink>
        <span className="cursor-context-menu">Update Carusel</span>
      </Breadcrumbs>
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
    </DashboardLayout>
  );
};

export default PartnerGalleryView;
