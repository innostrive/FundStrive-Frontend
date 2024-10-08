import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Rating,
} from "@material-tailwind/react";
import reviewing from "../../assets/Logo/user.jpg";
import { ThreeDotMenu } from "../../assets/icons/icons";
const BlogReviewCard = ({ blogReviews, handleDelete }) => {
  return (
    <div className="space-y-5">
      <span className="text-lg font-medium tracking-normal leading-normal text-secondary">
        Total Comments {blogReviews.length}
      </span>
      {blogReviews.map((review) => (
        <div className="grid grid-cols-12 items-center border border-gray-300 rounded-md p-5">
          <div className="col-span-2">
            <img
              src={reviewing}
              alt=""
              className="rounded-full object-cover h-20 w-20"
            />
          </div>
          <div className="col-span-10 space-y-5">
            <div className="flex justify-between">
              <h1>{review?.name}</h1>
              <div>
                <Rating
                  className="text-primary"
                  value={review?.rating}
                  readonly
                />
                <Menu>
                  <MenuHandler>
                    <button>
                      <ThreeDotMenu />
                    </button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem onClick={() => handleDelete(review?._id)}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            <p>{review?.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogReviewCard;
