import {
  CardBody,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import FormCard from "../../ui/FormCard";
import { Edit } from "../../assets/icons/icons";
import useFooterData from "../../hooks/useFooterData";
import { getTranslationObject } from "../../../../i18next";

const FooterSettings = () => {
  const footerData = useFooterData();
  const dashboardTranslations = getTranslationObject("dashboard");
  const { footer } = dashboardTranslations.footer;
  const dashboardTranslationsHeading = getTranslationObject("componentTitle");
  const { name, action, edit } = dashboardTranslationsHeading;
  const TABLE_HEAD = [name, action];
  return (
    <FormCard title={footer}>
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
            {footerData.map(({ value, _id }, index) => {
              const isLast = index === footerData.length - 1;
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
                      {value}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center">
                      <NavLink
                        to={`/admin-dashboard/footer/edit-footer/${_id}`}
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

export default FooterSettings;
