import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsersData from "../../hooks/useUsersData";
import { Link } from "react-router-dom";
import { Delete, Edit, View } from "../../assets/icons/icons";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

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

const UserList = () => {
  const { users, handleUserDelete } = useUsersData();
  const axiosSecure = useAxiosSecure();
  console.log("users:", users);
  // useEffect(() => {
  //   axiosSecure.get("/api/users").then((res) => {
  //     setUserList(res.data.data.users);
  //   });
  // }, []);

  // const handleUserDelete = (id) => {
  //   const data = {
  //     ids: [id],
  //   };
  //   Swal.fire({
  //     title: "Are you sure to delete?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete("/api/users", { data }).then((data) => {
  //         const remainingUser = users.filter((user) => user._id !== id);
  //         setUsers(remainingUser);
  //         data.status === 200
  //           ? toast.success("Delete Successful")
  //           : toast.warning("Activity not deleted");
  //       });
  //     }
  //   });
  // };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Role",
        accessor: "role",
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
            <Link to={`/dashboard/user-details/${row.original._id}`}>
              <View />
            </Link>
            <Link to={`/dashboard/edit-user/${row.original._id}`}>
              <Edit />
            </Link>
            <span
              className="cursor-pointer"
              onClick={() => handleUserDelete(row.original._id)}
            >
              <Delete />
            </span>
          </div>
        ),
      },
    ],
    []
  );

  // Define table data
  const data = useMemo(() => users, [users]);

  // Use table hook and pagination
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // instead of rows, use page for pagination
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Set page index to 0 by default
    },
    usePagination, // Add pagination hook
    useRowSelect
  );

  return (
    <div className="overflow-x-auto rounded-md">
      <img
        src="http://localhost:4000/public/uploads/users/1728208037095.jpeg"
        alt=""
        className="my-10"
      />
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
          {page.map((row) => {
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

      {/* Pagination Controls */}
      <div className="pagination mt-4 flex justify-between items-center">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page{" "}
          <strong className="text-base font-normal capitalize text-gray-600">
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4 py-2 bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Page Size Selection */}
      <div className="mt-4">
        <span className="text-base font-normal capitalize text-gray-600">
          Rows per page:{" "}
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="ml-2 border border-gray-300 rounded bg-gray-100"
        >
          {[5, 10, 20, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize} className="bg-gray-100">
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default UserList;
