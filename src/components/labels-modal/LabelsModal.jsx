import "./labelsmodal.css";
import { MdNewLabel, MdLabel, MdDelete } from "react-icons/md";
import { useNotes } from "contexts";
import { useState } from "react";
import { Toast } from "components";

export function LabelsModal({ setShowLabelsModal, isTagPage }) {
  let { note_editor, tags, dispatchNotes } = useNotes();
  let { labels: note_labels } = note_editor;
  const [tagName, setTagName] = useState("");

  const isLabelInNote = item =>
    note_labels?.find(i => i === item) ? true : false;

  const addLabels = item => {
    note_labels?.push(item);
    dispatchNotes({
      type: "SET_NOTE_EDITOR",
      payload: {
        key: "labels",
        value: note_labels,
      },
    });
  };

  const removeLabels = item => {
    note_labels = note_labels.filter(l => l !== item);
    dispatchNotes({
      type: "SET_NOTE_EDITOR",
      payload: {
        key: "labels",
        value: note_labels,
      },
    });
  };

  const addNewTag = () => {
    if (tagName) {
      dispatchNotes({ type: "ADD_NEW_TAG", payload: tagName });
      setTagName("");
    }
  };

  const deleteTag = item => {
    dispatchNotes({ type: "DELETE_TAG", payload: item });
    Toast({
      message: "This label will be removed from the notes as well.",
      type: "warning",
    });
  };

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
                        {isLabelInNote(item) ? (
                          <button
                            title="click to unselect"
                            className="btn btn-link add-tag-btn label-selected"
                            onClick={() => {
                              removeLabels(item);
                            }}
                          >
                            <MdLabel size={25} />
                          </button>
                        ) : (
                          <button
                            title="click to select"
                            className="btn btn-link add-tag-btn label-unselected"
                            onClick={() => addLabels(item)}
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
                onClick={() => addNewTag()}
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
