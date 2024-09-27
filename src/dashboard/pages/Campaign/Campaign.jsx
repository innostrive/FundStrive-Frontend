import { Link } from "react-router-dom";
import Campaigns from "./Campaigns";
import { Button } from "@material-tailwind/react";

const Campaign = () => {
  return (
    <div className="border border-b border-gray-200 rounded-md p-5">
      <div className="flex justify-between py-5">
        <h1 className="text-lg font-medium">Campaign List</h1>
        <Link to="/dashboard/create-campaign">
          <Button className="bg-[#2B2A27] ">Create New Campaign</Button>
        </Link>
      </div>
      <Campaigns></Campaigns>
    </div>
  );
};

export default Campaign;
