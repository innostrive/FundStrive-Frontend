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
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import usePartnerGallery from "../../hooks/usePartnerGallery";
import FormCard from "../../ui/FormCard";
import { Add, Delete, Edit, View } from "../../assets/icons/icons";
import useFooterData from "../../hooks/useFooterData";
import useSocialMediaData from "../../hooks/useSocialMediaData";
import { getTranslationObject } from "../../../../i18next";

const SocialMedia = () => {
  const [socialMediaLink] = useSocialMediaData();
  const dashboardTranslations = getTranslationObject("dashboard");
  const { socialMedia } = dashboardTranslations.socialMedia;
  const dashboardTranslationsHeading = getTranslationObject("componentTitle");
  const { name, action, link } = dashboardTranslationsHeading;
  const TABLE_HEAD = [name, link, action];
  return (
    <FormCard title={socialMedia}>
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
            {socialMediaLink.map(({ value, key, _id }, index) => {
              const isLast = index === socialMediaLink.length - 1;
              const classes = isLast
                ? "p-4 border-b-none"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {key}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {value}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center">
                      <NavLink
                        to={`/admin-dashboard/social-media/edit-social-media/${_id}`}
                      >
                        <Tooltip content="Edit">
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

export default SocialMedia;
