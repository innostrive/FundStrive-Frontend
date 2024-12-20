import { Link } from "react-router-dom";
import { Edit } from "../../assets/icons/icons";
import FormCard from "../../ui/FormCard";
import { useState } from "react";
import IButton from "../../ui/IButton";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";
const CategoryInfo = ({
  categoryInfo,
  setBlogContent,
  blogContent,
  categoryInformation,
}) => {
  const [edit, setEdit] = useState(false);
  const [blogData, setBlogData] = useState({});
  const { register } = useForm();
  // const apiUrl = import.meta.env.VITE_IMAGE_URL;
  // const configureImage = (image) => {
  //   return apiUrl + image;
  // };
  // console.log("image:", apiUrl + categoryInfo?.image);

  const handleContentChange = (value) => {
    setBlogContent(value);
  };
  return (
    <section>
      <FormCard title={categoryInformation}>
        <div className="grid grid-cols-1 gap-5 my-5">
          <div className="grid space-y-2">
            <h1 className="text-lg font-semibold text-secondary">
              {categoryInfo?.name}
            </h1>
            {/* <label className="text-sm">Name</label>
            <input
              type="text"
              defaultValue={categoryInfo?.name}
              disabled={edit ? false : true}
              className={`${
                edit
                  ? "p-2 bg-white border border-gray-200 rounded-md focus:outline-1 focus:outline-gray-200"
                  : "p-2 rounded-md bg-white border border-gary-200"
              }`}
              {...register("name")}
            /> */}
          </div>
          <div className="grid space-y-2">
            {/* <label className="text-sm">Description</label>
            <EditorToolbar toolbarId={"t2"} />
            <ReactQuill
              theme="snow"
              value={blogContent}
              onChange={handleContentChange}
              placeholder={"Write something awesome..."}
              modules={modules("t2")}
              formats={formats}
            /> */}
            <div dangerouslySetInnerHTML={{ __html: blogContent }}></div>
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
      </FormCard>
    </section>
  );
};

export default CategoryInfo;
