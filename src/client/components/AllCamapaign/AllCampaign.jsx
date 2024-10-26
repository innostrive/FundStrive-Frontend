import { Link } from "react-router-dom";
import donate from "../../assets/donate-1.jpg";
import { Button } from "../../Styles/Styles";
import { Progress, Typography } from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
const AllCampaign = ({ campaign }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const goal = campaign?.target_amount;
  const raised = campaign?.raised_amount;

  const initialProgress = ((raised / goal) * 100).toFixed(2);
  return (
    // <div className="h-auto w-full max-w-96 rounded-md bg-white">
    //   <img
    //     src={imageUrl + campaign?.image}
    //     crossOrigin="anonymous"
    //     alt=""
    //     className="h-52 w-full object-cover"
    //   />
    //   <div className="space-y-5 p-5">
    //     <div className="flex items-center justify-between">
    //       <div className="flex items-center gap-2">
    //         <img src={donate} alt="" className="h-10 w-10 rounded-full" />
    //         <p className="text-sm font-normal">{campaign?.organization}</p>
    //       </div>
    //       <Link to={`/campaign/${campaign?._id}`}>
    //         <div>
    //           <Button label="Donate" className="bg-primary" />
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="">
    //       <h1 className="font-medium text-secondary text-base">
    //         {campaign?.title}
    //       </h1>
    //     </div>
    //     <div className="h-20">
    //       <div className="p-5 bg-[#f3f4f7]">
    //         {/* <Progress
    //           value={initialProgress === 0 ? 0 : initialProgress}
    //           label="Completed"
    //           size="sm"
    //           className="bg-secondary h-3 text-xs"
    //           color="cyan"
    //         /> */}
    //         <div className="w-full">
    //           <div className="mb-2 flex items-center justify-between">
    //             <Typography color="blue-gray" variant="small">
    //               Completed
    //             </Typography>
    //             <Typography color="blue-gray" variant="small">
    //               {initialProgress}%
    //             </Typography>
    //           </div>
    //           <Progress
    //             value={initialProgress}
    //             className="bg-secondary h-3 text-xs"
    //             color="cyan"
    //             size="sm"
    //           />
    //         </div>
    //       </div>

    //       <div className="flex justify-between mt-5">
    //         <p className="font-bold text-sm text-[#00112c]">
    //           ${campaign?.raised_amount}
    //           <span className="font-semibold text-sm ml-1 tracking-normal text-primary">
    //             Raised
    //           </span>
    //         </p>
    //         <p className="font-bold text-sm text-[#00112c]">
    //           ${campaign.target_amount}
    //           <span className="font-semibold text-sm ml-1 tracking-normal text-[#219558]">
    //             Goal
    //           </span>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      className="h-auto w-full sm:max-w-96 rounded-md bg-white"
      key={campaign?._id}
    >
      <img
        src={imageUrl + campaign?.image}
        crossOrigin="anonymous"
        alt=""
        className="h-52 w-full object-cover"
      />
      <div className="space-y-5 p-5">
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
            <div>
              <IButton className="bg-primary hover:bg-secondary duration-200 ease-in text-text-primary rounded-none uppercase">
                Donate
              </IButton>
            </div>
          </Link>
        </div>
        <div className="">
          <h1 className="font-medium text-secondary text-base">
            {campaign?.title}
          </h1>
        </div>

        <div className="p-5 bg-[#f3f4f7]">
          {/* <div>
          <Progress
            value={initialProgress}
            label="Completed"
            size="md"
            className="bg-secondary h-3 text-xs"
            color="cyan"
          />
        </div> */}
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" variant="small">
                Completed
              </Typography>
              <Typography color="blue-gray" variant="small">
                {initialProgress}%
              </Typography>
            </div>
            <Progress
              value={initialProgress}
              className="bg-secondary h-3 text-xs"
              color="cyan"
              size="sm"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-bold text-sm text-secondary">
            ${campaign?.raised_amount}
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
      </div>
    </div>
  );
};

export default AllCampaign;
