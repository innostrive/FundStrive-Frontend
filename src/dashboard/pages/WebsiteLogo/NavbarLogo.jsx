import {
  CardBody,
  CardFooter,
  Typography,
  Chip,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Add, Delete, Edit, View } from "../../assets/icons/icons";
import { NavLink } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import useLogo from "../../hooks/useLogo";
import { getTranslationObject } from "../../../../i18next";

const NavbarLogo = () => {
  const [logo, handleLogoDelete] = useLogo();
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const dashboardTranslationsHeading = getTranslationObject("componentTitle");
  const {
    name,
    logo: navlogo,
    status,
    action,
    edit,
  } = dashboardTranslationsHeading;
  const dashboardTranslations = getTranslationObject("dashboard");
  const { navbarLogo } = dashboardTranslations.websiteLogo;
  const TABLE_HEAD = [name, navlogo, status, action];
  return (
    <FormCard title={navbarLogo}>
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
            {logo.map(({ name, image, status, _id }, index) => {
              const isLast = index === logo.length - 1;
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
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <img
                      src={
                        image
                          ? imageUrl + image
                          : "default-placeholder-image.jpg"
                      }
                      crossOrigin="anonymous"
                      alt=""
                      className="h-16 w-16 object-cover rounded-full"
                    />
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
                      {/* <NavLink to={`/dashboard/banner/${_id}`}>
                          <Tooltip content="View">
                            <IconButton variant="text">
                              <View className="size-5 text-secondary" />
                            </IconButton>
                          </Tooltip>
                        </NavLink> */}
                      <NavLink
                        to={`/admin-dashboard/website-logo/update-navbar-logo/${_id}`}
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

export default NavbarLogo;
