import { useEffect, useState } from "react";

const useRolePrivilegeValue = (role) => {
  const [rolePrivilegeValue, setRolePrivilegeValue] = useState({});
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
                case "POST":
                  roleValue[privilege].push("INSERT");
                  break;
                case "GET":
                  roleValue[privilege].push("VIEW");
                  break;
                case "PUT":
                  roleValue[privilege].push("EDIT");
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
    setRolePrivilegeValue(roleValue);
  }, [role]);
  return rolePrivilegeValue;
};

export default useRolePrivilegeValue;
