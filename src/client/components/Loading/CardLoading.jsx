import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Progress,
  Typography,
} from "@material-tailwind/react";

const CardLoading = () => {
  return (
    <Card className="h-[30rem] w-full sm:max-w-96 rounded-md bg-white flex flex-col">
      <CardHeader shadow={false} floated={false} className="h-40 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-12 w-12 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </CardHeader>

      <CardBody className="flex-grow space-y-5 p-5 max-h-36">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <Typography className="text-sm font-normal">&nbsp;</Typography>
          </div>
          <Button className="bg-primary hover:bg-secondary duration-200 ease-in text-text-primary rounded-none uppercase">
            &nbsp;
          </Button>
        </div>
        <h1 className="font-medium text-secondary text-base">&nbsp;</h1>
      </CardBody>

      <CardFooter className="h-24 flex-shrink-0">
        <div className="p-5 bg-[#f3f4f7] w-full">
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" variant="small">
              &nbsp;
            </Typography>
            <Typography color="blue-gray" variant="small">
              &nbsp;
            </Typography>
          </div>
          <Progress
            value="&nbsp"
            className="bg-secondary text-xs"
            color="cyan"
            size="sm"
          />
        </div>
        <div className="flex justify-between mt-5">
          <p className="font-bold text-sm text-secondary">
            &nbsp;
            <span className="font-semibold text-sm ml-1 tracking-normal text-primary">
              &nbsp;
            </span>
          </p>
          <p className="font-bold text-sm text-secondary">
            &nbsp;
            <span className="font-semibold text-sm ml-1 tracking-normal text-[#219558]">
              &nbsp;
            </span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardLoading;
