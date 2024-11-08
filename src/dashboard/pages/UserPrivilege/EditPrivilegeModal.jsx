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

const TABLE_HEAD = ["Name", "Action", "Action", "Action", "Action", "Action"];

const EditPriviliegeModal = ({ role }) => {
  const roleValue = useRolePrivilegeValue(role);
  // console.log("🚀 ~ EditPriviliegeModal ~ roleValue:", roleValue);
  const [rolePrivilegeValue, setRolePrivilegeValue] = useState({
    ...roleValue,
  });
  // console.log("roleValue:", roleValue);
  const URL = import.meta.env.VITE_BASE_URL;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [privilegeValue, setPrivilegeValue] = useState({});
  const { handleSubmit } = useForm();
  useEffect(() => {
    setRolePrivilegeValue(roleValue);
  }, [roleValue, rolePrivilegeValue]);

  const handleCheckboxChange = (event) => {
    let privilegeValue = [];
    const { name, checked } = event.target;
    const [action, privilege] = name.split("@");
    if (checked) {
      if (action === "All") {
        privilegeValue = ["All", "INSERT", "VIEW", "EDIT", "DELETE"];
      } else {
        privilegeValue = [...rolePrivilegeValue[privilege], action];
      }
    } else {
      if (action === "All") {
        privilegeValue = [];
      } else {
        privilegeValue = rolePrivilegeValue[privilege].filter(
          (item) => item !== action
        );
      }
    }

    setRolePrivilegeValue((prevState) => ({
      ...prevState,
      [privilege]: privilegeValue,
    }));

    // console.log(
    //   "🚀 ~ onChange ~ value:",
    //   privilege,
    //   " => ",
    //   rolePrivilegeValue[privilege]
    // );
  };
  useEffect(() => {
    // console.log("🚀 ~ useEffect ~ rolePrivilegeValue:", rolePrivilegeValue);
    setRolePrivilegeValue(rolePrivilegeValue);
  }, [rolePrivilegeValue]);

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
                          {["All", "INSERT", "VIEW", "EDIT", "DELETE"].map(
                            (action) => (
                              <td className={classes}>
                                <div className="flex items-center gap-5">
                                  <div
                                    key={`${action}-${privilege}`}
                                    className="flex items-center gap-2 border border-gray-200 rounded py-2 px-3"
                                  >
                                    <Typography variant="small">
                                      {action}
                                    </Typography>
                                    <input
                                      type="checkbox"
                                      color="blue"
                                      name={action + "@" + privilege}
                                      checked={
                                        rolePrivilegeValue[privilege]
                                          ? rolePrivilegeValue[
                                              privilege
                                            ].includes(action)
                                          : roleValue
                                      }
                                      onChange={handleCheckboxChange}
                                      containerProps={{ className: "p-0" }}
                                    />
                                  </div>
                                </div>
                              </td>
                            )
                          )}
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
