import Swal from "sweetalert2";
import { Add, Delete, Edit, View } from "../../assets/icons/icons";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSetting from "../../hooks/useSettings";
import FormCard from "../../ui/FormCard";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useMemo } from "react";
import { useRowSelect, useTable } from "react-table";

const StatusBadge = ({ status }) => (
  <span
    className={`px-2 py-1 rounded-md ${
      status === "Active"
        ? "border border-green-500 text-green-500 hover:text-white hover:bg-green-500"
        : "border border-red-500 text-red-500 hover:text-white hover:bg-red-500"
    }`}
  >
    {status}
  </span>
);
const Settings = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Code",
        accessor: "code",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
      {
        Header: "Category",
        accessor: "name",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => <StatusBadge status={value} />,
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div className="flex gap-2">
            <Link to={`/dashboard/settings/${row.original._id}`}>
              <View />
            </Link>
            <Link>
              <span
                className="cursor-pointer"
                onClick={() => handleSettingsDelete(row.original._id)}
              >
                <Delete />
              </span>
            </Link>
            <Link to={`/dashboard/edit-category/${row.original._id}`}>
              <Edit />
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  // Define table data
  const data = useMemo(() => columns, []);
  const { settings, setSettings } = useSetting();

  console.log("settings:", settings);
  const axiosSecure = useAxiosSecure();
  const handleSettingsDelete = (id) => {
    const data = {
      ids: [id],
    };
    Swal.fire({
      title: "Are you sure to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete("/api/settings", { data }).then((data) => {
          const remainingSetting = settings.filter(
            (setting) => setting._id !== id
          );
          console.log("remaining data of table:", remainingSetting);
          setSettings(remainingSetting);
          data.status === 200
            ? toast.success("Delete Successful")
            : toast.warning("Activity not deleted");
        });
      }
    });
  };

  // Use the table hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: settings }, useRowSelect, (hooks) => {});
  return (
    <FormCard
      title="Settings List"
      icon={<Add />}
      path="/dashboard/create-settings"
      iconTitle="Add"
    >
      <div className="overflow-x-auto rounded-md">
        <table {...getTableProps()} className="min-w-full bg-white border">
          <thead className="bg-gray-200">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="py-3 px-6 text-left text-sm font-medium text-gray-700 border-b"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="hover:bg-gray-100">
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="py-4 px-6 text-sm text-gray-600 border-b"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </FormCard>
  );
};

export default Settings;
