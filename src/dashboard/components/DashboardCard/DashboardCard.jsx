import { Link } from "react-router-dom";
import useContactCount from "../../../client/hooks/useContactCount";
import { Message } from "../../assets/icons/icons";

const DashboardCard = () => {
  const count = useContactCount();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 border border-b border-gray-200 rounded-md p-5">
      <div className="h-auto w-full min-h-20 sm:min-w-96 bg-[#b9a6ff] text-white rounded-md p-5">
        <div className="flex flex-col items-center gap-2">
          <span>Total Raised</span>
          <div className="flex gap-1 items-center text-white">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            <span className="text-lg font-semibold">
              {count?.raised_amount}
            </span>
          </div>
        </div>
      </div>
      <div className="h-auto w-full min-h-20 sm:min-w-96 bg-[#8BC34A] text-white rounded-md p-5">
        <div className="flex flex-col items-center gap-2">
          <span>Target Amount</span>
          <div className="flex gap-1 items-center text-white">
            <svg
              data-slot="icon"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
            <span className="text-lg font-semibold">
              {count?.target_amount}
            </span>
          </div>
        </div>
      </div>
      <Link to="/dashboard/contact-info">
        <div className="h-auto w-full min-h-20 sm:min-w-96 bg-[#FF9800] text-white rounded-md p-5">
          <div className="flex flex-col items-center gap-2">
            <span>Unread Message</span>
            <div className="flex gap-1 items-center text-white">
              <Message className="text-text-primary" />
              <span className="text-lg font-semibold">
                {count?.new_contact}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default DashboardCard;
