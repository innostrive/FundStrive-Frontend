import {
  CardBody,
  Typography,
  Chip,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import FormCard from "../../../ui/FormCard";
import { Edit } from "../../../assets/icons/icons";
import useTopNavData from "../../../hooks/useTopNavData";

const TABLE_HEAD = ["Key", "Value", "Status", "Action"];
const TopNavbarInfo = () => {
  const [topnavInfo] = useTopNavData();
  console.log("topnavInfo:", topnavInfo);

  return (
    <FormCard title="Top Navber Info">
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
            {topnavInfo.map(
              ({ key, name, value, slug, status, _id }, index) => {
                const isLast = index === topnavInfo.length - 1;
                const classes = isLast
                  ? "p-4 border-b-none"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <>
                    <tr key={_id}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          Email
                        </Typography>
                      </td>
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
                          <NavLink to={`/dashboard/edit-emailInfo/${_id}`}>
                            <Tooltip content="Edit">
                              <IconButton variant="text">
                                <Edit className="size-5 text-green-500" />
                              </IconButton>
                            </Tooltip>
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                    <tr key={_id} className="border-t border-blue-gray-50">
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          Phone
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {value}
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
                          <NavLink to={`/dashboard/edit-phoneInfo/${_id}`}>
                            <Tooltip content="Edit">
                              <IconButton variant="text">
                                <Edit className="size-5 text-green-500" />
                              </IconButton>
                            </Tooltip>
                          </NavLink>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </FormCard>
  );
};

export default TopNavbarInfo;
