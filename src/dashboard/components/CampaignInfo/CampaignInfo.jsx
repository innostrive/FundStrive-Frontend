import moment from "moment";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
import IButton from "../../ui/IButton";
import { Button, Option, Select } from "@material-tailwind/react";
import useCategoriesData from "../../hooks/useCategoriesData";
import CampaignReview from "./CampaignReview";

const CampaignInfo = ({
  campaignInfo,
  category,
  setCategory,
  campaignReviews,
}) => {
  const [categories] = useCategoriesData();
  const [edit, setEdit] = useState(false);
  const { register } = useForm();
  const [value, setValue] = useState();
  const campaignDeadline = moment(campaignInfo?.deadline).format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  const handleCategoryChange = (value) => {
    console.log(value);
    setCategory((prevData) => ({
      ...prevData,
      category: value,
    }));
  };
  return (
    <section>
      <FormCard
        title="Campaign Details"
        icon={
          <Edit
            onClick={() => setEdit(true)}
            className="size-6 text-secondary"
          />
        }
      >
        <div className="flex gap-4 items-center justify-center">
          <div>
            <img
              src={campaignInfo?.image}
              alt=""
              className="rounded-full h-20 w-20"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl font-medium text-black">
              {campaignInfo?.name}
            </h1>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
          <div className="grid space-y-2">
            <span className="text-sm">Name</span>
            <input
              type="text"
              defaultValue={campaignInfo?.name}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("name")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Ttile</span>
            <input
              type="text"
              defaultValue={campaignInfo?.name}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("name")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Category</span>
            <Select
              label="Category"
              value={category}
              onChange={(value) => setCategory(value)}
            >
              {categories.map((category) => (
                <Option
                  key={category?._id}
                  value={category?._id}
                  className="text-black"
                  onClick={() => setValue(category?.name)}
                >
                  {category.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Raised Amount</span>
            <input
              type="text"
              defaultValue={campaignInfo?.raised_amount}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("name")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Target Amount</span>
            <input
              type="text"
              defaultValue={campaignInfo?.target_amount}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("name")}
            />
          </div>
          <div className="grid space-y-2">
            <span className="text-sm">Deadline</span>
            <input
              type="text"
              defaultValue={campaignDeadline}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("name")}
            />
          </div>
          <div className="grid space-y-2 col-span-2">
            <label className="text-sm">Description</label>
            <EditorToolbar toolbarId={"t2"} />
            <ReactQuill
              theme="snow"
              value={campaignInfo?.description}
              // onChange={handleContentChange}
              placeholder={"Write something awesome..."}
              modules={modules("t2")}
              formats={formats}
            />
          </div>
        </div>
        {edit ? (
          <div className="my-5 flex gap-5 justify-end">
            <IButton>Update</IButton>
            <Button className="bg-red-400" onClick={() => setEdit(false)}>
              Cancel
            </Button>
          </div>
        ) : null}
        <div className="my-10 space-y-5">
          {campaignReviews.map((campaignReview) => (
            <CampaignReview campaignReview={campaignReview} />
          ))}
        </div>
      </FormCard>
    </section>
  );
};

export default CampaignInfo;
