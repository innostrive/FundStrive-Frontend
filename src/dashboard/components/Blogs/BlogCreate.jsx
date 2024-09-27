import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import EditorToolbar, {
  modules,
  formats,
} from "../../components/EditToolbar/EditToolbar";

const BlogCreate = () => {
  const axiosSecure = useAxiosSecure();
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const { register, handleSubmit } = useForm();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    const postData = {
      ...data,
      content: value,
      image: image,
    };

    formData.append("data", JSON.stringify(postData));

    if (image) {
      formData.append("image", image);
    } else {
      toast.error("image is missing");
    }
    console.log("blogData:", formData.get("data"));
    console.log("blogData:", formData.get("image"));

    axiosSecure
      .post("/api/posts", postData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Blog created successfully!!!");
          console.log("blog:", response.data);
        } else {
          toast.error("Something went wrong!!!");
          console.log("blog:", response.data.message);
        }
      });
  };
  return (
    <div className="border border-b border-gray-200 rounded-md p-5 w-3/4 flex mx-auto">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center">
          Upload Blog
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Ttile
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="name"
              name="title"
              {...register("title")}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Tags
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="desciption"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              id="description"
              name="tags"
              {...register("tags")}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Content
            </Typography>
            <EditorToolbar toolbarId={"t2"} />
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules("t2")}
              formats={formats}
              placeholder="Write blog here..."
            />
            <label
              htmlFor="image"
              className="text-base text-black font-medium text-center cursor-pointer block h-full w-full border border-gray-400 p-2 rounded-md"
            >
              Upload Image
            </label>
            <input
              type="file"
              placeholder="Upload Image"
              className="hidden"
              id="image"
              name="image"
              accept="image/*"
              onChange={(e) => handleImage(e)}
            />
            <div>
              {imagePreview && (
                <div className="size-32 border-2 border-dashed border-gray-400 rounded-md p-2">
                  <img
                    src={imagePreview}
                    alt=""
                    className="h-full w-full object-cover object-center rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
          <Button className="mt-6" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default BlogCreate;
