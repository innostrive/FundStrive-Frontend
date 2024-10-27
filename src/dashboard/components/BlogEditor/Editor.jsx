// import ReactQuill, { Quill } from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import ImageResize from "quill-image-resize-module-react";
// import { useEffect, useState } from "react";

// Quill.register("modules/imageResize", ImageResize);

// const Editor = ({
//   onEditorChange,
//   value,
//   placeholder = "Write something amazing...",
// }) => {
//   const [editorHtml, setEditorHtml] = useState(value);

//   useEffect(() => {
//     setEditorHtml(value); // Sync initial value and any changes from parent
//   }, [value]);

//   const handleChange = (html) => {
//     setEditorHtml(html);
//     if (onEditorChange) onEditorChange(html); // Trigger parent update
//   };
//   return (
//     <ReactQuill
//       key={value}
//       theme="snow"
//       onChange={handleChange}
//       value={editorHtml}
//       modules={Editor.modules}
//       formats={Editor.formats}
//       bounds={"#root"}
//       placeholder={placeholder}
//     />
//   );
// };

// Editor.modules = {
//   toolbar: [
//     [{ header: "1" }, { header: "2" }, { font: [] }],
//     [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["link", "image", "video"],
//     ["clean"],
//   ],
//   clipboard: {
//     matchVisual: false,
//   },
//   imageResize: {
//     parchment: Quill.import("parchment"),
//     modules: ["Resize", "DisplaySize"],
//   },
// };

// Editor.formats = [
//   "header",
//   "font",
//   "size",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "video",
// ];

// export default Editor;
