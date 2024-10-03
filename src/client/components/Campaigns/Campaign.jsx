import { useState } from "react";
import { Range } from "react-range";
import donate from "../../assets/donate-1.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import IButton from "../../../dashboard/ui/IButton";
const Campaign = ({ campaign }) => {
  const goal = campaign?.target_amount;
  const raised = campaign?.raised_amount;
  const average = (raised + goal) / 2;
  const initialProgress = (average / goal) * 100;

  const [progress, setProgress] = useState([initialProgress]);
  return (
    <div
      className="h-auto w-full sm:max-w-96 rounded-md bg-white"
      key={campaign?._id}
    >
      <img src={donate} alt="" className="h-52 w-full object-cover" />
      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={donate} alt="" className="h-10 w-10 rounded-full" />
            <p className="text-sm font-normal">{campaign?.name}</p>
          </div>
          <Link to={`/campaign/${campaign?._id}`}>
            <div>
              <IButton className="bg-primary">Donate</IButton>
            </div>
          </Link>
        </div>
        <div className="">
          <h1 className="font-medium text-secondary text-base">
            {campaign?.title}
          </h1>
        </div>

        <div className="p-5 bg-[#f3f4f7]">
          <div className="w-full rounded-full h-0.5 bg-[#2B2A27]">
            {/* <div className="bg-primary h-0.5 rounded-full w-[45%]"></div> */}
            <Range
              step={0.1}
              min={0}
              max={100}
              values={progress}
              onChange={(values) => setProgress(values)}
              renderTrack={({ props, children }) => (
                <div {...props}>
                  <div
                    style={{
                      position: "absolute",
                      width: `${progress[0]}%`,
                      backgroundColor: "#00CCDD",
                      height: "100%",
                      borderRadius: "4px",
                    }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "16px",
                    width: "16px",
                    backgroundColor: "#00CCDD",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              )}
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

export default Campaign;
