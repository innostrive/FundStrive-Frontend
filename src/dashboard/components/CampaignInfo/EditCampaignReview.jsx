import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import reviewing from "../../assets/Logo/user.jpg";
import { ThreeDotMenu } from "../../../client/assets/icons/icons";
import ShowRating from "../../../client/components/ui/ShowRating";
const EditCampaignReview = ({ campaignReview, handleDelete }) => {
  return (
    <div className="grid grid-cols-12 items-center border border-gray-300 rounded-md p-5">
      <div className="col-span-1">
        <img
          src={reviewing}
          alt=""
          className="rounded-full object-cover h-20 w-20"
        />
      </div>
      <div className="col-span-11 space-y-5">
        <div className="flex justify-between">
          <h1>{campaignReview?.name}</h1>
          <div className="flex gap-2">
            <ShowRating rating={campaignReview?.rating} />
            <Menu>
              <MenuHandler>
                <button>
                  <ThreeDotMenu />
                </button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => handleDelete(campaignReview?._id)}>
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <p>{campaignReview?.review}</p>
      </div>
    </div>
  );
};

export default EditCampaignReview;
