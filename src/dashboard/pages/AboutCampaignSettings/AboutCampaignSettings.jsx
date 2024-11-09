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
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import { NavLink } from "react-router-dom";
import { useState, useMemo } from "react";
import useAboutSettings from "../../hooks/useAboutSettings";
import useVolunteerData from "../../../client/hooks/useVolunteerData";
import useContactCount from "../../../client/hooks/useContactCount";
import { getTranslationObject } from "../../../../i18next";

const AboutCampaignSettings = () => {
  const [aboutSuccess] = useAboutSettings();
  const [volunteer] = useVolunteerData();
  const count = useContactCount();

  const about = aboutSuccess.filter((item) => item.key === "Volunteer");
  const donation = aboutSuccess.filter((item) => item.key === "Donation");

  if (about.length > 0 && donation.length > 0) {
    about[0].value = volunteer?.length;
    donation[0].value = count?.raised_amount;
  } else {
  }

  const [active, setActive] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(aboutSuccess.length / itemsPerPage);

  const paginatedAboutSuccess = useMemo(() => {
    const start = (active - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return aboutSuccess.slice(start, end);
  }, [aboutSuccess, active]);

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
  const { campaignDataList } = dashboardTranslations.aboutInfo;
  const dashboardTranslationsHeading = getTranslationObject("componentTitle");
  const { key, value, status, action, edit } = dashboardTranslationsHeading;
  const TABLE_HEAD = [key, value, status, action];
  return (
    <section>
      <FormCard title={campaignDataList}>
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
              {paginatedAboutSuccess.map(
                ({ key, value, status, _id }, index) => {
                  const isLast = index === paginatedAboutSuccess.length - 1;
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
                          {value || ""}
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
                          <NavLink
                            to={`/admin-dashboard/about-info/edit-about-settings/${_id}`}
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
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </FormCard>
    </section>
  );
};

export default AboutCampaignSettings;
