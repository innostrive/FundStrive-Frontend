import useBanner from "../../../hooks/useBanner";
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
import { Add, Delete, Edit, View } from "../../../assets/icons/icons";
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import FormCard from "../../../ui/FormCard";

const TABLE_HEAD = ["Code", "Name", "Slug", "Status", "Action"];

const BannerSettingsList = () => {
  const [banners, handleBannerDelete] = useBanner();
  console.log("banner:", banners);
  const [active, setActive] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(banners.length / itemsPerPage);

  const paginatedbanners = useMemo(() => {
    const start = (active - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return banners.slice(start, end);
  }, [banners, active]);

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
      title="Banner List"
      icon={<Add />}
      iconTitle="Add"
      path="/dashboard/create-banner"
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
            {paginatedbanners.map(
              ({ code, name, slug, status, _id }, index) => {
                const isLast = index === paginatedbanners.length - 1;
                const classes = isLast
                  ? "p-4 border-b-none"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {code}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {slug}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={status === "Active" ? "green" : "red"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center">
                        <NavLink to={`/dashboard/banner/${_id}`}>
                          <Tooltip content="Category Info">
                            <IconButton variant="text">
                              <View className="size-5 text-secondary" />
                            </IconButton>
                          </Tooltip>
                        </NavLink>
                        <NavLink to={`/dashboard/edit-banner/${_id}`}>
                          <Tooltip content="Edit">
                            <IconButton variant="text">
                              <Edit className="size-5 text-green-500" />
                            </IconButton>
                          </Tooltip>
                        </NavLink>
                        <Tooltip content="Delete">
                          <IconButton
                            variant="text"
                            onClick={() => handleBannerDelete(_id)}
                          >
                            <Delete className="size-5 text-red-500" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
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
    </FormCard>
  );
};

export default BannerSettingsList;