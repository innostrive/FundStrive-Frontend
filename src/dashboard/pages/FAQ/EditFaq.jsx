import axios from "axios";
import React, { useEffect, useState } from "react";
import FormCard from "../../ui/FormCard";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import IButton from "../../ui/IButton";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

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
        navigate("/dashboard/faq-settings");
      } else {
        toast.warning("Somthing wrong!!!");
      }
    });
    console.log("data:", payload);
  };
  return (
    <FormCard title="Edit FAQ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 space-y-2">
          <span className="text-sm">Question</span>
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
          <span className="text-sm">Answer</span>
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
          <span className="text-sm">Status</span>
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
          Update
        </IButton>
      </form>
    </FormCard>
  );
};

export default EditFaq;
