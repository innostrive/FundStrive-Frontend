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
import useUsersData from "../../hooks/useUsersData";
import { getTranslationObject } from "../../../../i18next";

const UserList = () => {
  const [users, handleUserDelete] = useUsersData();
  const dashboardTranslations = getTranslationObject("dashboard");
  const { userList, add, previous, nextT } =
    dashboardTranslations?.dashboardTitle;
  const dashboardTranslationsHeading = getTranslationObject("componentTitle");
  const {
    name,
    country,
    role,
    status,
    action,
    view,
    edit,
    delete: deleteT,
  } = dashboardTranslationsHeading;
  const TABLE_HEAD = [name, country, role, status, action];
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [active, setActive] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const paginatedusers = useMemo(() => {
    const start = (active - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return users.slice(start, end);
  }, [users, active]);

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
      title={userList}
      icon={<Add />}
      iconTitle={add}
      path="/admin-dashboard/users/create-user"
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
            {paginatedusers.map(
              ({ name, country, role, status, _id }, index) => {
                const isLast = index === paginatedusers.length - 1;
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
                        {country}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {role || "No role assigned"}
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
                          to={`/admin-dashboard/users/user-details/${_id}`}
                        >
                          <Tooltip content={view}>
                            <IconButton variant="text">
                              <View className="size-5 text-secondary" />
                            </IconButton>
                          </Tooltip>
                        </NavLink>
                        <NavLink to={`/admin-dashboard/users/edit-user/${_id}`}>
                          <Tooltip content={edit}>
                            <IconButton variant="text">
                              <Edit className="size-5 text-green-500" />
                            </IconButton>
                          </Tooltip>
                        </NavLink>
                        <Tooltip content={deleteT}>
                          <IconButton
                            variant="text"
                            onClick={() => handleUserDelete(_id)}
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
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            {previous}
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
            {nextT}
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </FormCard>
  );
};

export default UserList;
