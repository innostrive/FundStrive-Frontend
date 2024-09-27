import UserList from "../../components/UserList/UserList";

const Users = () => {
  return (
    <div className="border border-b border-gray-200 rounded-md p-5">
      <h1 className="text-lg font-medium mb-5">User List</h1>
      <UserList></UserList>
    </div>
  );
};

export default Users;
