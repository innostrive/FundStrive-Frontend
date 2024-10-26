import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAboutIntroData = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const axiosSecure = useAxiosSecure();

  const { data: aboutIntro = [] } = useQuery({
    queryKey: ["aboutIntro"],
    queryFn: async () => {
      const res = await axios.get(`${URL}/settings?slug=ABOUT_INTRO`);
      return res.data.data.settings;
    },
  });

  return [aboutIntro];
};

export default useAboutIntroData;
