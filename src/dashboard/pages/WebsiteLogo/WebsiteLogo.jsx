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

const TABLE_HEAD = ["Name", "Slug", "Status", "Action"];

const WebsiteLogo = () => {
  const [logo, handleLogoDelete] = useLogo();
  return (
    <FormCard
      title="Website Logo"
      icon={<Add />}
      iconTitle="Upload"
      path="/dashboard/upload-logo"
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
            {logo.map(({ name, slug, status, _id }, index) => {
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
                          onClick={() => handleLogoDelete(_id)}
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
    </FormCard>
  );
};

export default WebsiteLogo;
