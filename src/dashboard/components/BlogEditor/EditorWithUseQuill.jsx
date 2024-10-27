// import { useEffect, useState } from "react";
// import { useQuill } from "react-quilljs";
// import BlotFormatter from "quill-blot-formatter";
// import "quill/dist/quill.snow.css";

// const Editor = ({ onChange }) => {
//   const { quill, quillRef, Quill } = useQuill({
//     modules: { blotFormatter: {} },
//   });
//   const [editorContent, setEditorContent] = useState("");

//   if (Quill && !quill) {
//     Quill.register("modules/blotFormatter", BlotFormatter);
//   }

//   useEffect(() => {
//     if (quill) {
//       quill.on("text-change", () => {
//         const content = quill.root.innerHTML; // Get the HTML content of the editor
//         setEditorContent(content);
//         if (onChange) {
//           onChange(content); // Pass the content to the parent
//         }
//       });
//     }
//   }, [quill, onChange]);

//   return <div ref={quillRef} />;
// };

// export default Editor;
