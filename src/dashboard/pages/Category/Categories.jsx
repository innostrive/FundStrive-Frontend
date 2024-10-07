import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect } from "react-table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsersData from "../../hooks/useUsersData";
import { Link } from "react-router-dom";
import useCategoriesData from "../../hooks/useCategoriesData";
import Swal from "sweetalert2";
import { Add, Delete, Edit, View } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import { toast } from "react-toastify";

// Component for rendering action buttons
const ActionButtons = () => (
  <div className="flex space-x-2">
    <button className="text-blue-500 hover:text-blue-700">View</button>
    <button className="text-red-500 hover:text-red-700">Delete</button>
    <button className="text-purple-500 hover:text-purple-700">Edit</button>
  </div>
);

// Component for rendering the status badge
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

// Default column for the checkbox
const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const Categories = () => {
  const COLUMNS = useMemo(
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
            <Link to={`/dashboard/category/${row.original._id}`}>
              <View />
            </Link>
            <span
              className="cursor-pointer"
              onClick={() => handleCategoryDelete(row.original._id)}
            >
              <Delete />
            </span>
            <Link to={`/dashboard/edit-category/${row.original._id}`}>
              <Edit />
            </Link>
          </div>
        ),
      },
    ],
    []
  );
  const data = useMemo(() => COLUMNS, []);

  const { categories, setCategories } = useCategoriesData();
  const axiosSecure = useAxiosSecure();

  const handleCategoryDelete = (id) => {
    const data = { ids: [id] };

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
        axiosSecure
          .delete("/api/categories", { data })
          .then((response) => {
            if (response.status === 200) {
              toast.success("Delete Successful");
            } else {
              toast.warning("Category not deleted");
            }
          })
          .catch((error) => {
            toast.error("An error occurred");
            console.error(error);
          });
      }
    });
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      { columns: COLUMNS, data: categories },
      useRowSelect,
      (hooks) => {}
    );

  return (
    <FormCard
      title="Category List"
      path="/dashboard/create-category"
      icon={<Add />}
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

export default Categories;
