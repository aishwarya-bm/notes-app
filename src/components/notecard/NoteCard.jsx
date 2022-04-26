import {
  MdPalette,
  MdArchive,
  MdDelete,
  MdEdit,
  MdRestore,
  MdUnarchive,
} from "react-icons/md";
import { useState } from "react";
import "./notecard.css";
import { ColorPalette } from "components";
import { useLogin, useNotes } from "contexts";
import { useNavigate } from "react-router-dom";
import {
  deleteNote,
  moveNoteToTrash,
  restoreFromTrash,
  moveNoteToArchive,
  moveNoteToTrashFromArchive,
  restoreFromArchive,
} from "utils";

export function NoteCard({
  noteItem,
  setShowEditor,
  isTrashPage,
  isArchivePage,
}) {
  const [showPalette, setShowPalette] = useState(false);
  const { _id, title, cardColor, priority, body, labels, createdAt } = noteItem;
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
          <div className="card-title">{title}</div>
        </div>

        <div className="card-content">
          <p
            className="note-desc"
            dangerouslySetInnerHTML={{
              __html: body,
            }}
          ></p>

          <div className="d-flex gap-sm">
            {noteItem?.labels?.map((label, idx) => {
              return (
                <span className="text-sm card-label" key={"tag" + idx}>
                  {label}
                </span>
              );
            })}
          </div>
          <div className="text-sm info-created">Created at: {createdAt}</div>
        </div>
        {showPalette && (
          <ColorPalette
            isEdit={true}
            setShowEditor={setShowEditor}
            note={noteItem}
            setShowPalette={setShowPalette}
          />
        )}
        <div className="card-action d-flex note-actions">
          {!isTrashPage && !isArchivePage && (
            <button
              className="btn btn-link"
              onClick={() => {
                changeCardColor(noteItem);
              }}
            >
              <MdPalette size={20} />
            </button>
          )}
          {isTrashPage ? (
            <button
              className="btn btn-link"
              onClick={() => {
                restoreFromTrash(isLoggedIn, noteItem, dispatchNotes, navigate);
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
                    payload: noteItem,
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
                  moveNoteToArchive(
                    isLoggedIn,
                    noteItem,
                    dispatchNotes,
                    navigate
                  )
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
              return moveNoteToTrash(
                isLoggedIn,
                noteItem,
                dispatchNotes,
                navigate
              );
            }}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
