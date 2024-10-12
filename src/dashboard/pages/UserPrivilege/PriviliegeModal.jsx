import React, { useState } from "react";
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

const TABLE_HEAD = ["Name", "Action"];

const PriviliegeModal = ({ role }) => {
  const [open, setOpen] = useState(false);
  const [all, setAll] = useState(false);

  const handleOpen = () => setOpen(!open);

  const rolePrivilege = role?.admin;
  console.log("role:", rolePrivilege);

  return (
    <>
      <View
        className="size-5 text-secondary cursor-pointer"
        onClick={handleOpen}
      />
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
                {rolePrivilege &&
                  Object.keys(rolePrivilege).map((privilege, index) => {
                    const isLast = index === Object.keys(rolePrivilege) - 1;
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
                            <div className="flex items-center gap-2 border border-gray-200 rounded py-2 px-3">
                              <Typography variant="small">POST</Typography>
                              <Checkbox
                                color="blue"
                                containerProps={{
                                  className: "p-0",
                                }}
                              />
                            </div>
                            <div className="flex items-center gap-2 border border-gray-200 rounded py-2 px-3">
                              <Typography variant="small">GET</Typography>
                              <Checkbox
                                color="blue"
                                containerProps={{
                                  className: "p-0",
                                }}
                              />
                            </div>
                            <div className="flex items-center gap-2 border border-gray-200 rounded py-2 px-3">
                              <Typography variant="small">EDIT</Typography>
                              <Checkbox
                                color="blue"
                                containerProps={{
                                  className: "p-0",
                                }}
                                checked={all ? true : false}
                              />
                            </div>
                            <div className="flex items-center gap-2 border border-gray-200 rounded py-2 px-3">
                              <Typography variant="small">All</Typography>
                              <Checkbox
                                color="blue"
                                checked={all ? true : false}
                                onClick={() => setAll((prev) => !prev)}
                                containerProps={{
                                  className: "p-0",
                                }}
                              />
                            </div>
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
    </>
  );
};
export default PriviliegeModal;
