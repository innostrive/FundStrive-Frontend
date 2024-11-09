import useSettings from "../../hooks/useSettings";

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
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import { FilterSettings } from "./FilterSettings";
import FormCard from "../../ui/FormCard";
import { getTranslationObject } from "../../../../i18next";

const MenuSettings = () => {
  const [settings, handleSettingsDelete] = useSettings();

  const [active, setActive] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(settings.length / itemsPerPage);

  const paginatedSettings = useMemo(() => {
    const start = (active - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return settings.slice(start, end);
  }, [settings, active]);

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
  const dashboardTranslations = getTranslationObject("dashboard");
  const dashboardTranslationsHeader = getTranslationObject("componentTitle");
  const { menuList } = dashboardTranslations.menu;
  const { menu, status, action } = dashboardTranslationsHeader;
  const dashboardTranslationsHeading = getTranslationObject("componentTitle");
  const { view, edit } = dashboardTranslationsHeading;
  const TABLE_HEAD = [menu, status, action];
  return (
    <FormCard title={menuList}>
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
            {paginatedSettings.map(({ key, status, _id }, index) => {
              const isLast = index === paginatedSettings.length - 1;
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
                        className="font-normal"
                      >
                        {key}
                      </Typography>
                    </div>
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
                      <NavLink
                        to={`/admin-dashboard/navmenus/navmenu-details/${_id}`}
                      >
                        <Tooltip content={view}>
                          <IconButton variant="text">
                            <View className="size-5 text-secondary" />
                          </IconButton>
                        </Tooltip>
                      </NavLink>
                      <NavLink
                        to={`/admin-dashboard/navmenus/edit-navmenu/${_id}`}
                      >
                        <Tooltip content={edit}>
                          <IconButton variant="text">
                            <Edit className="size-5 text-green-500" />
                          </IconButton>
                        </Tooltip>
                      </NavLink>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </FormCard>
  );
};

export default MenuSettings;
