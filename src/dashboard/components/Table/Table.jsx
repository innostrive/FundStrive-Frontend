import axios from "axios";
import React, { useMemo } from "react";
import { useTable, useRowSelect } from "react-table";

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

const Table = () => {
  // Define table columns
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "categories",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => <StatusBadge status={value} />,
      },
      {
        Header: "Action",
        Cell: () => <ActionButtons />,
      },
    ],
    []
  );

  // Define table data
  const data = useMemo(
    () => [
      {
        id: "#0001",
        categories: "Medical Terpenes",
        date: "March 23, 2023",
        status: "Active",
      },
      {
        id: "#0002",
        categories: "Sauce Terps",
        date: "March 29, 2023",
        status: "Inactive",
      },
      {
        id: "#0003",
        categories: "Live Resin Terpenes",
        date: "March 23, 2023",
        status: "Active",
      },
      {
        id: "#0004",
        categories: "Isolates",
        date: "March 10, 2023",
        status: "Active",
      },
      {
        id: "#0005",
        categories: "710Terps",
        date: "March 10, 2023",
        status: "Inactive",
      },
      // Add more rows as needed
    ],
    []
  );

  // Use the table hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useRowSelect, (hooks) => {
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

export default Table;
