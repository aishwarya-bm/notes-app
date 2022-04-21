import "./labelsmodal.css";
import { MdNewLabel, MdLabel } from "react-icons/md";
import { useNotes } from "contexts";
import { useState } from "react";
import { addLabels, addNewTag, isLabelInNote, removeLabels } from "utils";

export function LabelsModal({ setShowLabelsModal, isTagPage }) {
  let { note_editor, tags, dispatchNotes } = useNotes();
  let { labels: note_labels } = note_editor;
  const [tagName, setTagName] = useState("");

  return (
    <>
      <div className="d-flex modal-container">
        <div className="modal children-stacked">
          <h5 className="text-center">Tags</h5>
          {!isTagPage && (
            <div className="modal-body">
              <ul className="d-flex children-stacked grid-gap">
                {tags &&
                  tags?.map((item, idx) => {
                    return (
                      <li className="d-flex label-items" key={idx}>
                        {isLabelInNote(note_labels, item) ? (
                          <button
                            title="click to unselect"
                            className="btn btn-link add-tag-btn label-selected"
                            onClick={() => {
                              removeLabels(item, note_labels, dispatchNotes);
                            }}
                          >
                            <MdLabel size={25} />
                          </button>
                        ) : (
                          <button
                            title="click to select"
                            className="btn btn-link add-tag-btn label-unselected"
                            onClick={() =>
                              addLabels(item, note_labels, dispatchNotes)
                            }
                          >
                            <MdNewLabel size={25} />
                          </button>
                        )}
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}

          <div className="d-flex children-center modal-actions grid-gap">
            <input
              type="text"
              required
              value={tagName}
              name="tag"
              onChange={e => setTagName(e.target.value)}
            />
            <div className="d-flex">
              <button
                className="btn btn-primary modal-btn"
                onClick={() =>
                  addNewTag(tagName, tags, dispatchNotes, setTagName)
                }
              >
                Create
              </button>
              <button
                className="btn btn-light modal-btn"
                onClick={() => {
                  setShowLabelsModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
