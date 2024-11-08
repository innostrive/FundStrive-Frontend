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

const EditFaq = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();
  const [faqDetails, setFaqDetails] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("");
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/settings/${id}`).then((res) => {
      setFaqDetails(res.data.data);
      setSelectedStatus(res.data.data.status);
    });
  }, [id]);

  useEffect(() => {
    reset();
  }, [faqDetails]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      status: selectedStatus,
    };

    axiosSecure.put(`/api/settings/${id}`, payload).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/admin-dashboard/faq");
      } else {
        toast.warning("Somthing wrong!!!");
      }
    });
  };
  const dashboardTranslations = getTranslationObject("dashboard");
  const { updateFaq, faq, question, answer, update, status } =
    dashboardTranslations.faq;
  return (
    <section>
      <Breadcrumbs className="bg-gray-400 bg-opacity-30 mb-5">
        <NavLink to="/admin-dashboard/faq" className="opacity-60">
          {faq}
        </NavLink>
        <span className="cursor-context-menu">{updateFaq}</span>
      </Breadcrumbs>
      <FormCard title={updateFaq}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{question}</span>
            <input
              type="text"
              size="lg"
              className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="key"
              name="key"
              {...register("key")}
              defaultValue={faqDetails?.key}
            />
          </div>

          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{answer}</span>
            <textarea
              type="text"
              className="text-base border border-gray-300 h-auto min-h-40 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
              id="value"
              name="value"
              {...register("value")}
              defaultValue={faqDetails?.value}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <span className="text-sm">{status}</span>
            <select
              label="Select Status"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="border border-gray-300 focus:outline-gray-300 px-2 py-1.5 w-auto text-base rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <IButton type="submit" className="flex ml-auto">
            {update}
          </IButton>
        </form>
      </FormCard>
    </section>
  );
};

export default EditFaq;
