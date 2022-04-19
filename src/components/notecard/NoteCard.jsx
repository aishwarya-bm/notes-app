import {
  MdPalette,
  MdArchive,
  MdDelete,
  MdEdit,
  MdOutlinePushPin,
} from "react-icons/md";
import { useState } from "react";
import "./notecard.css";
import { ColorPalette } from "components";
import { moveNoteToTrash } from "utils/notes-utils";
import { useLogin, useNotes } from "contexts";
import { useNavigate } from "react-router-dom";

export function NoteCard({ item, setShowEditor }) {
  const [showPalette, setShowPalette] = useState(false);

  const { isLoggedIn } = useLogin();
  const { dispatchNotes } = useNotes();
  const navigate = useNavigate();

  const changeCardColor = item => {
    setShowPalette(prev => !prev);
    dispatchNotes({
      type: "EDIT_NOTE",
      payload: item,
    });
  };
  return (
    <>
      <div
        className="card children-stacked p-rel"
        key={item._id}
        style={{ backgroundColor: item.cardColor }}
      >
        <div className="card-badge">{item.priority}</div>

        <div className="card-header d-flex">
          <div className="card-title">{item.title} </div>
          <button className="btn btn-link">
            <MdOutlinePushPin size={25} />
          </button>
        </div>
        <div className="card-content">
          <p
            dangerouslySetInnerHTML={{
              __html: item.body,
            }}
          ></p>

          <div className="d-flex gap-sm">
            {item.labels?.map(label => {
              return <span className="text-sm card-label">{label}</span>;
            })}
          </div>
          <div className="text-sm">Created at: {item.createdAt}</div>
        </div>
        {showPalette && (
          <ColorPalette
            isEdit={true}
            setShowEditor={setShowEditor}
            note={item}
            setShowPalette={setShowPalette}
          />
        )}
        <div className="card-action children-center">
          <button
            className="btn btn-link"
            onClick={() => {
              changeCardColor(item);
            }}
          >
            <MdPalette size={20} />
          </button>
          <button
            className="btn btn-link"
            onClick={() => {
              setShowEditor(true);
              dispatchNotes({
                type: "EDIT_NOTE",
                payload: item,
              });
            }}
          >
            <MdEdit size={20} />
          </button>
          <button className="btn btn-link">
            <MdArchive size={20} />
          </button>
          <button
            className="btn btn-link"
            onClick={() => {
              moveNoteToTrash(isLoggedIn, item._id, dispatchNotes, navigate);
            }}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
