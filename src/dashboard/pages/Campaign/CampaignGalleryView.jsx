import { useParams } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import useCampaignGallery from "../../hooks/useCampaignGallery";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Delete } from "../../assets/icons/icons";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import moment from "moment";
import IButton from "../../ui/IButton";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CampaignGalleryView = () => {
  const { id } = useParams();
  const URL = import.meta.env.VITE_BASE_URL;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const axiosSecure = useAxiosSecure();
  const { refetch, data: galleryView = [] } = useQuery({
    queryKey: ["galleryView"],
    queryFn: async () => {
      const res = await axios.get(
        `${URL}/campaigns/asset?type=image&campaign_id=${id}`
      );
      return res.data.data;
    },
  });

  const handleGalleryDelete = (_id) => {
    const data = { ids: [_id] };
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/campaigns/asset`, { data })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Delete Successful");
              refetch();
            } else {
              toast.warning("Image is not deleted");
            }
          })
          .catch((error) => {
            toast.error("An error occurred");
            console.error(error);
          });
      }
    });
  };
  return (
    <FormCard title="Campaign Gallery">
      <div className="flex gap-5">
        {galleryView.map((gallery) => (
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src={imageUrl + gallery?.asset}
                crossOrigin="anonymous"
                alt=""
                className="object-cover rounded-md"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal"
                >
                  Uploaded Time
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  {moment(gallery?.created_at).format("D-M-YYYY")}
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-3">
              <IButton
                fullWidth={true}
                onClick={() => handleGalleryDelete(gallery?._id)}
              >
                Delete
              </IButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </FormCard>
  );
};

export default CampaignGalleryView;
