import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { View } from "../../assets/icons/icons";
import { AiOutlineClose } from "react-icons/ai";
const ViewSingleImage = ({ open, handleOpen, asset, campaignName }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  return (
    <>
      <IconButton variant="text" onClick={handleOpen}>
        <View className="size-5 text-secondary" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="flex justify-between items-center">
          {campaignName}
          <AiOutlineClose
            size={20}
            onClick={handleOpen}
            className="cursor-pointer"
          />
        </DialogHeader>
        <DialogBody>
          <img
            src={imageUrl + asset}
            crossOrigin="anonymous"
            alt=""
            className="h-full w-full object-cover"
          />
        </DialogBody>
      </Dialog>
    </>
  );
};

export default ViewSingleImage;
