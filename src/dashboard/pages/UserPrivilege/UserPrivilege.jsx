import {
  CardBody,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import useRolePriviliege from "../../hooks/useRolePriviliege";
import FormCard from "../../ui/FormCard";
import { NavLink } from "react-router-dom";
import { Delete, Edit, View } from "../../assets/icons/icons";
import PriviliegeModal from "./PriviliegeModal";
import { useState } from "react";
const TABLE_HEAD = ["Role", "Action"];
const UserPrivilege = () => {
  const [rolePrivliege] = useRolePriviliege();
  const [role, setRole] = useState();

  const handleRole = (key) => {
    return Object.keys(rolePrivliege)
      .filter((k) => k === key)
      .reduce((obj, k) => {
        obj[k] = rolePrivliege[k];
        setRole(obj);
        console.log("obj:", obj);
        return obj;
      }, {});
  };

  return (
    <FormCard title="Role List">
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
            {Object.keys(rolePrivliege).map((item, index) => {
              const isLast = index === rolePrivliege.length - 1;
              const classes = isLast
                ? "p-4 border-b-none"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal capitalize"
                    >
                      {item}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center">
                      <Tooltip content="Roll Info">
                        <IconButton
                          variant="text"
                          onClick={() => handleRole(item)}
                        >
                          <PriviliegeModal role={role} />
                        </IconButton>
                      </Tooltip>
                      <NavLink>
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

export default UserPrivilege;
