import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  Typography,
  Tooltip,
  IconButton,
  Checkbox,
} from "@material-tailwind/react";
import { Edit, View } from "../../assets/icons/icons";
import IButton from "../../ui/IButton";
import useRolePrivilegeValue from "../../hooks/useRolePrivilegeValue";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const TABLE_HEAD = ["Name", "Action"];

const EditPriviliegeModal = ({ role }) => {
  const rolePrivilegeValue = useRolePrivilegeValue(role);
  const URL = import.meta.env.VITE_BASE_URL;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [privilegeValue, setPrivilegeValue] = useState({});
  const { handleSubmit } = useForm();
  const roleValue = {};
  useEffect(() => {
    role
      ? Object.keys(role).map((privilege) => {
          if (!roleValue.hasOwnProperty(privilege)) {
            roleValue[privilege] = [];
          }
          if (role[privilege][0] === "*") {
            roleValue[privilege] = ["All", "INSERT", "VIEW", "EDIT", "DELETE"];
          }
          if (role[privilege].length > 0) {
            role[privilege].map((item) => {
              switch (item) {
                case "INSERT":
                  roleValue[privilege].push("POST");
                  break;
                case "VIEW":
                  roleValue[privilege].push("GET");
                  break;
                case "EDIT":
                  roleValue[privilege].push("PUT");
                  break;
                case "DELETE":
                  roleValue[privilege].push("DELETE");
                  break;

                default:
                  break;
              }
            });
          }
        })
      : [];
    setPrivilegeValue(roleValue);
  }, [role]);

  const onSubmit = (data) => {
    axios.put(`${URL}/settings/role-privilige`).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
      }
    });
  };

  return (
    <>
      <Edit className="size-5 cursor-pointer" onClick={handleOpen} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Role Priviliege</DialogHeader>
          <DialogBody>
            <Card className="h-full w-full shadow-none border">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70 capitalize"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rolePrivilegeValue &&
                    Object.keys(rolePrivilegeValue).map((privilege, index) => {
                      const isLast =
                        index === Object.keys(rolePrivilegeValue).length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {privilege}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex items-center gap-5">
                              {["All", "INSERT", "VIEW", "EDIT", "DELETE"].map(
                                (action) => (
                                  <div
                                    key={action}
                                    className="flex items-center gap-2 border border-gray-200 rounded py-2 px-3"
                                  >
                                    <Typography variant="small">
                                      {action}
                                    </Typography>
                                    <Checkbox
                                      color="blue"
                                      defaultChecked={
                                        rolePrivilegeValue[privilege]
                                          ? rolePrivilegeValue[
                                              privilege
                                            ].includes(action)
                                          : false
                                      }
                                      containerProps={{ className: "p-0" }}
                                    />
                                  </div>
                                )
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </Card>
          </DialogBody>
          <DialogFooter>
            <IButton onClick={handleOpen}>Close</IButton>
          </DialogFooter>
        </Dialog>
      </form>
    </>
  );
};
export default EditPriviliegeModal;
