import { ColorPalette, Editor } from "components";
import { useState } from "react";
import dayjs from "dayjs";

import { LabelsModal } from "../labels-modal/LabelsModal";
import "./addnote.css";
import { useLogin, useNotes } from "contexts";
import { useNavigate } from "react-router-dom";
import { createNote } from "utils/notes-utils";
export function Addnote({ setShowEditor }) {
  const [showLabelsModal, setShowLabelsModal] = useState(false);
  const { isLoggedIn } = useLogin();
  const { dispatchNotes } = useNotes();
  const navigate = useNavigate();
  const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
    priority: "medium",
    labels: [],
    createdAt: formatDate(),
    cardColor: "white",
  });

  const handleNewNoteChange = ({ target }) => {
    setNewNote({ ...newNote, [target.name]: target.value });
  };

  const setNoteBody = e => {
    setNewNote({ ...newNote, ["body"]: e });
  };
  return (
    <>
      <div
        className="editor-component children-stacked"
        style={{ backgroundColor: `${newNote.cardColor}` }}
      >
        <div className="d-flex notes-details">
          <label>
            <b>Title:</b> &nbsp;
            <input
              type="text"
              name="title"
              value={newNote.title}
              onChange={e => handleNewNoteChange(e)}
            />
          </label>
          <label>
            <b> Priority:</b> &nbsp;
            <select
              name="priority"
              value={newNote.priority}
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
            Add tags
          </button>
        </div>
        <section className="quill-editor">
          <Editor
            value={newNote.body}
            setValue={e => setNewNote({ ...newNote, body: e })}
          />
        </section>
        <div className="palette">
          <ColorPalette newNote={newNote} setNewNote={setNewNote} />
        </div>
        <div className="children-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              createNote(
                isLoggedIn,
                newNote,
                dispatchNotes,
                navigate,
                setShowEditor
              );
            }}
          >
            Save
          </button>
          <button
            className="btn btn-light"
            onClick={() => setShowEditor(false)}
          >
            Cancel
          </button>
        </div>

        {showLabelsModal && (
          <LabelsModal
            setShowLabelsModal={setShowLabelsModal}
            newNote={newNote}
            setNewNote={setNewNote}
          />
        )}
      </div>
    </>
  );
}
