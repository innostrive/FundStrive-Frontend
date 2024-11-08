import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { X } from "../../assets/icons/icons";
import { FaFileExcel, FaFilePdf, FaFileWord } from "react-icons/fa";

const Gallery = ({ campaignId }) => {
  const URL = import.meta.env.VITE_BASE_URL;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(!open);
  };

  const { data: gallery = [] } = useQuery({
    queryKey: ["campaign-gallery"],
    queryFn: async () => {
      const res = await axios.get(
        `${URL}/campaigns/asset?type=image&campaign_id=${campaignId}`
      );
      return res.data.data;
    },
  });

  return (
    <section className="flex gap-2 flex-wrap">
      {gallery.map((image) => (
        <img
          key={image?._id}
          src={imageUrl + image?.asset}
          alt={`Image ${image?.asset}`}
          className="h-40 w-60 object-cover cursor-pointer"
          crossOrigin="anonymous"
          onClick={() => handleOpen(image)}
        />
      ))}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>
          <X
            onClick={() => setOpen(false)}
            className="flex ml-auto cursor-pointer"
          />
        </DialogHeader>
        <DialogBody className="border-none">
          {selectedImage ? (
            <img
              src={imageUrl + selectedImage?.asset}
              alt={`Image ${selectedImage?.asset}`}
              className="h-full w-full object-cover rounded"
              crossOrigin="anonymous"
            />
          ) : (
            <p>No image selected</p> // Fallback content when `selectedImage` is null
          )}
        </DialogBody>
      </Dialog>
    </section>
  );
};

export default Gallery;
