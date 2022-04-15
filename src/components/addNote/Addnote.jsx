import { useState } from "react";
import { Editor } from "../../components";
import { LabelsModal } from "../labels-modal/LabelsModal";
import "./addnote.css";
export function Addnote({ setShowEditor }) {
  const [showLabelsModal, setShowLabelsModal] = useState(false);

  return (
    <>
      <div className="editor-component children-stacked">
        <div className="d-flex notes-details">
          <label>
            <b>Title:</b> &nbsp;
            <input type="text" />
          </label>
          <label>
            <b> Priority:</b> &nbsp;
            <select>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>

          <button
            className="btn btn-link"
            onClick={() => setShowLabelsModal(true)}
          >
            Add tags
          </button>
        </div>
        <section className="quill-editor">
          <Editor />
        </section>
        <div className="children-center">
          <button className="btn btn-primary">Save</button>
          <button
            className="btn btn-light"
            onClick={() => setShowEditor(false)}
          >
            Cancel
          </button>
        </div>

        {showLabelsModal && (
          <LabelsModal setShowLabelsModal={setShowLabelsModal} />
        )}
      </div>
    </>
  );
}
