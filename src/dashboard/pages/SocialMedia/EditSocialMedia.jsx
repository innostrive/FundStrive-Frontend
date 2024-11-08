import axios from "axios";
import React, { useEffect, useState } from "react";
import FormCard from "../../ui/FormCard";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import IButton from "../../ui/IButton";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Breadcrumbs } from "@material-tailwind/react";
import { getTranslationObject } from "../../../../i18next";

const EditSocialMedia = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();
  const [socialLinkDetails, setSocialLinkDetails] = useState({});
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/settings/${id}`).then((res) => {
      setSocialLinkDetails(res.data.data);
    });
  }, [id]);

  useEffect(() => {
    reset();
  }, [socialLinkDetails]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
    };

    axiosSecure.put(`/api/settings/${id}`, payload).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/admin-dashboard/social-media");
      } else {
        toast.warning("Somthing wrong!!!");
      }
    });
  };
  const dashboardTranslations = getTranslationObject("dashboard");
  const { socialMedia, updateSocialMediaLink, update, link } =
    dashboardTranslations.socialMedia;
  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/social-media" className="opacity-60">
          {socialMedia}
        </NavLink>
        <span className="cursor-context-menu">{updateSocialMediaLink}</span>
      </Breadcrumbs>
      <FormCard title="Update Social Link">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{socialLinkDetails?.key}</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="value"
              name="value"
              {...register("value")}
              defaultValue={socialLinkDetails?.value}
            />
          </div>
          <IButton type="submit" className="flex ml-auto">
            {update}
          </IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default EditSocialMedia;
