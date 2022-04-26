import { ColorPalette, Editor } from "components";
import { useState } from "react";

import { LabelsModal } from "components";
import "./addnote.css";
import { useLogin, useNotes } from "contexts";
import { useNavigate } from "react-router-dom";
import { createNote, modifyNote } from "utils";
export function Addnote({ setShowEditor }) {
  const [showLabelsModal, setShowLabelsModal] = useState(false);
  const { isLoggedIn } = useLogin();
  const { note_editor, dispatchNotes } = useNotes();
  const { _id, title, cardColor, priority, body } = note_editor;
  const navigate = useNavigate();

  const handleNewNoteChange = ({ target }) => {
    dispatchNotes({
      type: "SET_NOTE_EDITOR",
      payload: { key: target.name, value: target.value },
    });
  };

  const saveNotes = () => {
    if (_id) {
      modifyNote(
        isLoggedIn,
        note_editor,
        dispatchNotes,
        navigate,
        setShowEditor,
        false
      );
    } else
      createNote(
        isLoggedIn,
        note_editor,
        dispatchNotes,
        navigate,
        setShowEditor
      );
  };

  const cancelSave = () => {
    dispatchNotes({
      type: "CLEAR_EDITOR",
    });
    setShowEditor(false);
  };

  return (
    <>
      <div
        className="editor-component children-stacked"
        style={{ backgroundColor: cardColor }}
      >
        <div className="d-flex notes-details">
          <label>
            <b>Title:</b> &nbsp;
            <input
              type="text"
              name="title"
              value={title}
              onChange={e => handleNewNoteChange(e)}
            />
          </label>
          <label>
            <b> Priority:</b> &nbsp;
            <select
              name="priority"
              value={priority}
              onChange={e => handleNewNoteChange(e)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>

          <button
            className="btn btn-link"
            onClick={() => setShowLabelsModal(true)}
          >
            Add Tags
          </button>
        </div>
        <section className="quill-editor">
          <Editor
            value={body}
            setValue={e =>
              dispatchNotes({
                type: "SET_NOTE_EDITOR",
                payload: { key: "body", value: e },
              })
            }
          />
        </section>
        <section className="d-flex section-label-palette">
          <div className="d-flex gap-sm note-selected-labels">
            {note_editor?.labels?.map((i, idx) => {
              return (
                <span className="card-label" key={"add-note" + idx}>
                  {" "}
                  {i}{" "}
                </span>
              );
            })}
          </div>
          <div className="palette">
            <ColorPalette />
          </div>
        </section>

        <div className="children-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              saveNotes();
            }}
          >
            Save
          </button>
          <button
            className="btn btn-light"
            onClick={() => {
              cancelSave();
            }}
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
