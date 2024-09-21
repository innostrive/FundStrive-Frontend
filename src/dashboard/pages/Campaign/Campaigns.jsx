import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect } from "react-table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsersData from "../../hooks/useUsersData";
import { Link } from "react-router-dom";
import useCategoriesData from "../../hooks/useCategoriesData";
import useCampaignData from "../../hooks/useCampaignData";

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

const Campaigns = () => {
  const campaigns = useCampaignData();
  console.log("campaigns:", campaigns);
  const axiosSecure = useAxiosSecure();
  //   const handleUserDelete = (id) => {
  //     const deleteId = {
  //       ids: [id],
  //     };
  //     axiosSecure
  //       .delete("/api/users", deleteId)
  //       .then((response) => console.log("user deleted", response));
  //   };
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
        Header: "Campaign",
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
        Header: "Title",
        accessor: "title",
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
            <Link to={`/dashboard/user-details/${row.original._id}`}>
              <button className="text-blue-500 hover:text-blue-700">
                View
              </button>
            </Link>
            <Link>
              {" "}
              {/* <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleUserDelete(console.log(row?.original._id))}
              >
                Delete
              </button> */}
            </Link>
            <Link to={`/dashboard/edit-user/${row.original._id}`}>
              <button className="text-purple-500 hover:text-purple-700">
                Edit
              </button>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  // Define table data
  const data = useMemo(() => campaigns, []);

  // Use the table hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: campaigns }, useRowSelect, (hooks) => {
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

export default Campaigns;
