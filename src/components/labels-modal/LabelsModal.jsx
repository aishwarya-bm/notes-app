import "./labelsmodal.css";
import { MdNewLabel, MdLabel } from "react-icons/md";
import { useNotes } from "contexts";

export function LabelsModal({ setShowLabelsModal }) {
  let { note_editor, dispatchNotes } = useNotes();
  let { labels: note_labels } = note_editor;
  const labels = ["label1", "label2", "label3", "label4"];

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

  return (
    <>
      <div className="d-flex modal-container">
        <div className="modal children-stacked">
          <>
            <div className="modal-header d-flex">
              <h5>Tags</h5>
            </div>
            <div className="modal-body">
              <ul className="d-flex children-stacked grid-gap">
                {labels &&
                  labels?.map((item, idx) => {
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
          </>

          <div className="d-flex children-center modal-actions grid-gap">
            <input type="text" required />
            <div className="d-flex">
              <button className="btn btn-primary modal-btn">Create</button>
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
