import {
  MdPalette,
  MdArchive,
  MdDelete,
  MdEdit,
  MdOutlinePushPin,
  MdRestore,
  MdUnarchive,
} from "react-icons/md";
import { useState } from "react";
import "./notecard.css";
import { ColorPalette } from "components";
import {
  deleteNote,
  moveNoteToTrash,
  restoreFromTrash,
} from "utils/notes-utils";
import { useLogin, useNotes } from "contexts";
import { useNavigate } from "react-router-dom";
import {
  moveNoteToArchive,
  moveNoteToTrashFromArchive,
  restoreFromArchive,
} from "utils/archive-utils";

export function NoteCard({ item, setShowEditor, isTrashPage, isArchivePage }) {
  const [showPalette, setShowPalette] = useState(false);
  const { _id, title, cardColor, priority, body, labels, createdAt } = item;
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
        key={_id}
        style={{ backgroundColor: cardColor }}
      >
        <div className="card-badge">{priority}</div>

        <div className="card-header d-flex">
          <div className="card-title">{title} </div>
          {!isTrashPage && !isArchivePage && (
            <button className="btn btn-link">
              <MdOutlinePushPin size={25} />
            </button>
          )}
        </div>
        <div className="card-content">
          <p
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          ></p>

          <div className="d-flex gap-sm">
            {labels?.map(label => {
              return <span className="text-sm card-label">{label}</span>;
            })}
          </div>
          <div className="text-sm">Created at: {createdAt}</div>
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
          {!isTrashPage && !isArchivePage && (
            <button
              className="btn btn-link"
              onClick={() => {
                changeCardColor(item);
              }}
            >
              <MdPalette size={20} />
            </button>
          )}
          {isTrashPage ? (
            <button
              className="btn btn-link"
              onClick={() => {
                restoreFromTrash(isLoggedIn, _id, dispatchNotes, navigate);
              }}
            >
              <MdRestore size={20} />
            </button>
          ) : (
            !isArchivePage && (
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
            )
          )}
          {isArchivePage ? (
            <button
              className="btn btn-link"
              onClick={() =>
                restoreFromArchive(isLoggedIn, _id, dispatchNotes, navigate)
              }
            >
              <MdUnarchive size={20} />
            </button>
          ) : (
            !isTrashPage && (
              <button
                className="btn btn-link"
                onClick={() =>
                  moveNoteToArchive(isLoggedIn, item, dispatchNotes, navigate)
                }
              >
                <MdArchive size={20} />
              </button>
            )
          )}
          <button
            className="btn btn-link"
            onClick={() => {
              if (isTrashPage) {
                return deleteNote(isLoggedIn, _id, dispatchNotes, navigate);
              } else if (isArchivePage) {
                return moveNoteToTrashFromArchive(
                  isLoggedIn,
                  _id,
                  dispatchNotes,
                  navigate
                );
              }
              return moveNoteToTrash(isLoggedIn, _id, dispatchNotes, navigate);
            }}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
