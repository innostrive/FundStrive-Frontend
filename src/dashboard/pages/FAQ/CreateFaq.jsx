import { useForm } from "react-hook-form";
import FormCard from "../../ui/FormCard";
import IButton from "../../ui/IButton";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateFaq = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const payload = {
      ...data,
      slug: "FAQ",
      name: "FAQ",
    };
    axiosSecure.post("/api/settings", payload).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        reset();
        navigate("/dashboard/faq-settings");
        // console.log("faq:", res.data);
      } else {
        toast.warning("Something Wrong!!!");
      }
    });
    // console.log("data:", payload);
  };
  return (
    <FormCard title="Create FAQ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 space-y-2">
          <span className="text-sm">Question</span>
          <input
            type="text"
            size="lg"
            className="text-base border border-gray-300 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
            id="key"
            name="key"
            {...register("key", {
              required: "Question is required",
            })}
          />
          {errors.key && (
            <span className="text-red-500 text-xs">{errors.key.message}</span>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-2">
          <span className="text-sm">Answer</span>
          <textarea
            type="text"
            className="text-base border border-gray-300 h-auto min-h-40 px-2 py-1.5 w-auto focus:outline-gray-300 focus:outline-1 rounded"
            id="value"
            name="value"
            {...register("value", {
              required: "Answer is required",
            })}
          />
          {errors.value && (
            <span className="text-red-500 text-xs">{errors.value.message}</span>
          )}
        </div>

        <IButton className="flex ml-auto mt-5">Submit</IButton>
      </form>
    </FormCard>
  );
};

export default CreateFaq;
