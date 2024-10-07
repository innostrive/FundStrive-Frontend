import { FormProvider } from "react-hook-form";
import FormCard from "../../../ui/FormCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BannerInfo = () => {
  const { id } = useParams();
  const [banner, setBanner] = useState({});
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/banners/${id}`).then((res) => {
      setBanner(res.data.data);
    });
  }, [id, axiosSecure]);
  return (
    <FormCard title="Upload Banner">
      <div className="space-y-5">
        <div className="grid grid-cols-1 space-y-2">
          <span className="text-sm">Name</span>
          <input
            className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
            type="text"
            defaultValue={banner?.name}
            disabled
          />
        </div>
        <div className="grid grid-cols-1 space-y-2">
          <span className="text-sm">Slug</span>
          <input
            className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
            type="text"
            defaultValue={banner?.slug}
            disabled
          />
        </div>
      </div>
    </FormCard>
  );
};

export default BannerInfo;
