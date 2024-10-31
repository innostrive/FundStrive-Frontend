import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
  Typography,
} from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
const Campaign = ({ campaign }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const goal = campaign?.target_amount || 0;
  const raised = campaign?.raised_amount || 0;
  const initialProgress =
    goal > 0 ? ((raised / goal) * 100).toFixed(2) : "0.00";

  return (
    <Card
      className="h-[30rem] w-full sm:max-w-96 rounded-md bg-white flex flex-col"
      key={campaign?._id}
    >
      <CardHeader shadow={false} floated={false} className="h-40 flex-shrink-0">
        <img
          src={imageUrl + campaign?.image}
          crossOrigin="anonymous"
          alt=""
          className="h-full w-full object-cover"
        />
      </CardHeader>

      <CardBody className="flex-grow space-y-5 p-5 max-h-36">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={imageUrl + campaign?.image}
              crossOrigin="anonymous"
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <p className="text-sm font-normal">{campaign?.name}</p>
          </div>
          <Link to={`/campaign/${campaign?._id}`}>
            <IButton className="bg-primary hover:bg-secondary duration-200 ease-in text-text-primary rounded-none uppercase">
              Donate
            </IButton>
          </Link>
        </div>
        <h1 className="font-medium text-secondary text-base">
          {campaign?.title}
        </h1>
      </CardBody>

      <CardFooter className="h-24 flex-shrink-0">
        <div className="p-5 bg-[#f3f4f7] w-full">
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" variant="small">
              Completed
            </Typography>
            <Typography color="blue-gray" variant="small">
              {initialProgress}%
            </Typography>
          </div>
          <Progress
            value={initialProgress}
            className="bg-secondary text-xs"
            color="cyan"
            size="sm"
          />
        </div>
        <div className="flex justify-between mt-5">
          <p className="font-bold text-sm text-secondary">
            ${campaign?.raised_amount > 0 ? campaign?.raised_amount : 0}
            <span className="font-semibold text-sm ml-1 tracking-normal text-primary">
              Raised
            </span>
          </p>
          <p className="font-bold text-sm text-secondary">
            ${campaign?.target_amount}
            <span className="font-semibold text-sm ml-1 tracking-normal text-[#219558]">
              Goal
            </span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Campaign;
