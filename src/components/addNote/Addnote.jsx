import { ColorPalette, Editor } from "components";
import { useState } from "react";

import { LabelsModal } from "../labels-modal/LabelsModal";
import "./addnote.css";
import { useLogin, useNotes } from "contexts";
import { useNavigate } from "react-router-dom";
import { createNote, modifyNote } from "utils/notes-utils";
export function Addnote({ setShowEditor }) {
  const [showLabelsModal, setShowLabelsModal] = useState(false);
  const { isLoggedIn } = useLogin();
  const { note_editor, dispatchNotes } = useNotes();
  const navigate = useNavigate();

  const handleNewNoteChange = ({ target }) => {
    dispatchNotes({
      type: "SET_NOTE_EDITOR",
      payload: { key: target.name, value: target.value },
    });
  };

  const saveNotes = () => {
    if (note_editor._id) {
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
        style={{ backgroundColor: note_editor.cardColor }}
      >
        <div className="d-flex notes-details">
          <label>
            <b>Title:</b> &nbsp;
            <input
              type="text"
              name="title"
              value={note_editor.title}
              onChange={e => handleNewNoteChange(e)}
            />
          </label>
          <label>
            <b> Priority:</b> &nbsp;
            <select
              name="priority"
              value={note_editor.priority}
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
            {note_editor._id ? "Modify tags" : "Add tags"}
          </button>
        </div>
        <section className="quill-editor">
          <Editor
            value={note_editor.body}
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
            {note_editor?.labels?.map(i => {
              return <span className="card-label"> {i} </span>;
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
