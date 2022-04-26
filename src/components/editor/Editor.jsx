import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";

export function Editor(props) {
  const { value, setValue } = props;
  const formats = [
    // "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const modules = {
    toolbar: [
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        placeholder="Add a note"
        value={value}
        onChange={setValue}
        formats={formats}
        modules={modules}
        {...props}
      />
    </>
  );
}
