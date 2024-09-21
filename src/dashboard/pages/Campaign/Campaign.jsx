import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import Campaigns from "./Campaigns";
import { Button } from "@material-tailwind/react";

const Campaign = () => {
  return (
    <Layout>
      <div className="flex justify-between py-5">
        <h1>Campaign List</h1>
        <Link to="/dashboard/create-campaign">
          <Button>Create New Campaign</Button>
        </Link>
      </div>
      <Campaigns></Campaigns>
    </Layout>
  );
};

export default Campaign;
