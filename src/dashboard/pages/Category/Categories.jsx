import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect } from "react-table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsersData from "../../hooks/useUsersData";
import { Link } from "react-router-dom";
import useCategoriesData from "../../hooks/useCategoriesData";
import Swal from "sweetalert2";

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
    className={`px-2 py-1 rounded-full text-white ${
      status === "Active" ? "bg-green-500" : "bg-red-500"
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
  const categories = useCategoriesData();
  console.log("categories:", categories);
  const axiosSecure = useAxiosSecure();
  const handleUserDelete = (id) => {
    const deleteId = {
      ids: [id],
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete("/api/categories", deleteId)
          .then((response) => console.log("category delete:", response));
      }
    });
  };
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
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
        Header: "Code",
        accessor: "code",
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Link>
            <Link>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
                onClick={() => handleUserDelete(row?.original._id)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </Link>
            <Link to={`/dashboard/edit-category/${row.original._id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  // Define table data
  const data = useMemo(() => categories, []);

  // Use the table hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: categories }, useRowSelect, (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    });

  return (
    <div className="overflow-x-auto">
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
  );
};

export default Categories;
