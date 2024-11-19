// import { useEffect, useState } from "react";
// import { Edit } from "../../assets/icons/icons";
// import FormCard from "../../ui/FormCard";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import IButton from "../../ui/IButton";
// import { Button } from "@material-tailwind/react";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";

// const Address = () => {
//   const [edit, setEdit] = useState(false);
//   const [userInfo, setUserInfo] = useState({});
//   const {
//     register,
//     reset,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const userId = localStorage.getItem("userId");

//   const axiosSecure = useAxiosSecure();
//   useEffect(() => {
//     axiosSecure.get(`/api/users/${userId}`).then((res) => {
//       setUserInfo(res.data.data);
//     });
//   }, [userId]);

//   useEffect(() => {
//     reset();
//   }, [userInfo]);

//   const onSubmit = (data) => {
//     axiosSecure
//       .put(`/api/users/${userId}`, data)
//       .then((res) => {
//         if (res.status === 200) {
//           toast.success(res.data.message);
//           // navigate("/admin-dashboard/users");
//         }
//       })
//       .catch((error) => {
//         toast.error(error);
//         console.error("Error submitting data:", error);
//       });
//   };

//   return (
//     <FormCard
//       title="Address"
//       icon={
//         <Edit onClick={() => setEdit(true)} className="text-secondary size-6" />
//       }
//     >
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="flex justify-between items-center">
//           <div className="flex-1">
//             <div className="grid grid-cols-2 justify-between gap-5">
//               <div className="flex flex-col">
//                 <label htmlFor="" className="text-sm">
//                   Address
//                 </label>
//                 <input
//                   disabled={edit ? false : true}
//                   defaultValue={userInfo?.address}
//                   className={`${
//                     edit
//                       ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
//                       : "p-2 rounded-md bg-white border border-gary-200"
//                   }`}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="" className="text-sm">
//                   Country
//                 </label>
//                 <input
//                   disabled={edit ? false : true}
//                   defaultValue={userInfo?.country}
//                   className={`${
//                     edit
//                       ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
//                       : "p-2 rounded-md bg-white border border-gary-200"
//                   }`}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="" className="text-sm">
//                   State
//                 </label>
//                 <input
//                   disabled={edit ? false : true}
//                   defaultValue={userInfo?.state}
//                   className={`${
//                     edit
//                       ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
//                       : "p-2 rounded-md bg-white border border-gary-200"
//                   }`}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="" className="text-sm">
//                   City
//                 </label>
//                 <input
//                   disabled={edit ? false : true}
//                   defaultValue={userInfo?.city}
//                   className={`${
//                     edit
//                       ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
//                       : "p-2 rounded-md bg-white border border-gary-200"
//                   }`}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="" className="text-sm">
//                   Post Code
//                 </label>
//                 <input
//                   disabled={edit ? false : true}
//                   defaultValue={userInfo?.post_code}
//                   className={`${
//                     edit
//                       ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
//                       : "p-2 rounded-md bg-white border border-gary-200"
//                   }`}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         {edit ? (
//           <div className="my-5 flex gap-5 justify-end">
//             <IButton>Update</IButton>
//             <Button className="bg-red-400" onClick={() => setEdit(false)}>
//               Cancel
//             </Button>
//           </div>
//         ) : null}
//       </form>
//     </FormCard>
//   );
// };

// export default Address;

import { useEffect, useState } from "react";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import IButton from "../../ui/IButton";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { getTranslationObject } from "../../../../i18next";

const Address = () => {
  const [edit, setEdit] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const dashboardTranslations = getTranslationObject("dashboard");
  const {
    country,
    postCode,
    address,
    update,
    cancel,
    status,
    personalInformation,
    userUpdateSuccess,
    error,
  } = dashboardTranslations?.form;
  const { addressError, countryError, postCodeError } =
    dashboardTranslations?.errors;
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userId = localStorage.getItem("userId");

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/api/users/${userId}`).then((res) => {
      setUserInfo(res.data.data);
    });
  }, [userId]);

  useEffect(() => {
    reset(userInfo); // Reset form fields with fetched data
  }, [userInfo, reset]);

  const onSubmit = (data) => {
    axiosSecure
      .put(`/api/users/${userId}`, data)
      .then((res) => {
        if (res.status === 200) {
          toast.success(userUpdateSuccess);
          setEdit(false); // Close edit mode upon successful update
        } else {
          toast.error(error);
        }
      })
      .catch((err) => {
        toast.error(error);
      });
  };

  return (
    <FormCard
      title={address}
      icon={
        <Edit onClick={() => setEdit(true)} className="text-secondary size-6" />
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col space-y-2">
                <label htmlFor="address" className="text-sm">
                  {address}
                </label>
                <input
                  disabled={!edit}
                  defaultValue={userInfo?.address}
                  {...register("address", { required: addressError })}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md"
                      : "p-2 bg-white border border-gray-200"
                  }`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="country" className="text-sm">
                  {country}
                </label>
                <input
                  disabled={!edit}
                  defaultValue={userInfo?.country}
                  {...register("country", { required: countryError })}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md"
                      : "p-2 bg-white border border-gray-200"
                  }`}
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="post_code" className="text-sm">
                  {postCode}
                </label>
                <input
                  disabled={!edit}
                  defaultValue={userInfo?.post_code}
                  {...register("post_code", {
                    required: postCodeError,
                  })}
                  className={`${
                    edit
                      ? "p-2 bg-white border border-gray-200 rounded-md"
                      : "p-2 bg-white border border-gray-200"
                  }`}
                />
                {errors.post_code && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.post_code.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        {edit && (
          <div className="my-5 flex gap-5 justify-end">
            <IButton type="submit">{update}</IButton>
            <Button className="bg-red-400" onClick={() => setEdit(false)}>
              {cancel}
            </Button>
          </div>
        )}
      </form>
    </FormCard>
  );
};

export default Address;
