import {
  CardBody,
  CardFooter,
  Typography,
  Chip,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Add, Delete, Edit, View } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import useCampaignData from "../../hooks/useCampaignData";
import useCampaignGallery from "../../hooks/useCampaignGallery";
import ViewSingleImage from "./ViewSingleImage";

const TABLE_HEAD = ["Image", "Action"];

const CampaignGallery = ({ id, campaignName }) => {
  const [gallery, handleGalleryDelete] = useCampaignGallery(id);
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleOpen = (asset) => {
    setSelectedAsset(asset);
    setOpen(!open);
  };

  const itemsPerPage = 5;
  const totalPages = Math.ceil(gallery.length / itemsPerPage);

  const paginatedGallery = useMemo(() => {
    const start = (active - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return gallery.slice(start, end);
  }, [gallery, active]);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
    className:
      active === index
        ? "rounded-full bg-secondary text-white"
        : "rounded-full bg-gray-50 hover:bg-gray-200 text-black",
  });

  const next = () => {
    if (active < totalPages) setActive(active + 1);
  };

  const prev = () => {
    if (active > 1) setActive(active - 1);
  };

  return (
    <FormCard
      title="Gallery List"
      icon={<Add />}
      path={`/admin-dashboard/campaigns/upload-gallery/${id}`}
      iconTitle="Upload"
    >
      <CardBody className="border p-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="font-bold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedGallery.map(({ asset, _id }, index) => {
              const isLast = index === paginatedGallery.length - 1;
              const classes = isLast
                ? "p-4 border-b-none"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <img
                      src={imageUrl + asset}
                      crossOrigin="anonymous"
                      alt=""
                      className="h-16 w-16 object-cover rounded-full"
                    />
                  </td>
                  <td className={classes}>
                    <div className="flex items-center">
                      <Tooltip content="View">
                        <IconButton
                          variant="text"
                          onClick={() => handleOpen(asset)}
                        >
                          <View className="size-5 text-blue-500" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete">
                        <IconButton
                          variant="text"
                          onClick={() => handleGalleryDelete(_id)}
                        >
                          <Delete className="size-5 text-red-500" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-end p-4">
        <div className="flex items-center gap-4">
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <IconButton key={i + 1} {...getItemProps(i + 1)}>
                {i + 1}
              </IconButton>
            ))}
          </div>

          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={next}
            disabled={active === totalPages}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>

      {selectedAsset && (
        <ViewSingleImage
          open={open}
          handleOpen={() => setOpen(false)}
          asset={selectedAsset}
          campaignName={campaignName}
        />
      )}
    </FormCard>
  );
};

export default CampaignGallery;
