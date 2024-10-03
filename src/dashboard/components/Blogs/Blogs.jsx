import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect } from "react-table";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsersData from "../../hooks/useUsersData";
import { Link } from "react-router-dom";
import useBlogsData from "../../hooks/useBlogsData";
import moment from "moment";
import { Add, Delete, Edit, View } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import { toast } from "react-toastify";
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

const Blogs = () => {
  const { blogs, setBlogs } = useBlogsData();
  const axiosSecure = useAxiosSecure();
  console.log("blogs:", blogs);

  const handleBlogDelete = (id) => {
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
          .delete("/api/posts", { data })
          .then((response) => {
            if (response.status === 200) {
              const remainingCategories = blogs.filter(
                (blog) => blog._id !== id
              );
              setBlogs(remainingCategories);
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
        Header: "Title",
        accessor: "title",
        Cell: (row) => {
          return <span>{row?.cell?.value}</span>;
        },
      },
      {
        Header: "Published",
        accessor: "created_at",
        Cell: (row) => {
          return <span>{moment(row?.cell?.value).format("MMMM Do YYYY")}</span>;
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
            <Link to={`/dashboard/blog/${row.original._id}`}>
              <View />
            </Link>
            <span
              className="cursor-pointer"
              onClick={() => handleBlogDelete(row.original._id)}
            >
              <Delete />
            </span>
            <Link to={`/dashboard/edit-blog/${row.original._id}`}>
              <Edit />
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  // Define table data
  const data = useMemo(() => blogs, [blogs, handleBlogDelete]);

  // Use the table hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useRowSelect, (hooks) => {});

  return (
    <FormCard
      title="Blog List"
      icon={<Add />}
      path="/dashboard/create-blog"
      iconTitle="Add"
      className="w-full"
    >
      <div className="overflow-x-auto rounded-md">
        <table {...getTableProps()} className="w-full bg-white border">
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

export default Blogs;
