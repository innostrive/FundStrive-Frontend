import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRolePriviliege = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();

  const { refetch, data: rolePrivliege = [] } = useQuery({
    queryKey: ["role-privilige"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings/role-privilige`);
      // console.log("role:", res.data.data);
      return res.data.data;
    },
  });
  return [rolePrivliege];
};

export default useRolePriviliege;
