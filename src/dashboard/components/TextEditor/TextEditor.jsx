import JoditEditor from "jodit-react";
import { useMemo, useRef } from "react";

const TextEditor = ({
  setContent,
  label,
  defaultValue,
  value,
  placeholder,
  error,
  msgTooltip,
  className,
}) => {
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typings...",
      minHeight: 250,
      height: "auto",
    }),
    [placeholder]
  );
  return (
    <div className="space-y-2">
      <label htmlFor="id">{label}</label>
      <JoditEditor
        ref={editor}
        config={config}
        value={value}
        defaultValue={defaultValue}
        tabIndex={1}
        // onChange={(content) => setContent(content)}
      />
    </div>
  );
};

export default TextEditor;
