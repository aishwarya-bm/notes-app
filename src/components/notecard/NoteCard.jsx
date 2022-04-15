import {
  MdPalette,
  MdArchive,
  MdDelete,
  MdEdit,
  MdOutlinePushPin,
} from "react-icons/md";
import { useState } from "react";
import "./notecard.css";
import { ColorPalette } from "../colorpalette/ColorPalette";

export function NoteCard({ item }) {
  const [showPalette, setShowPalette] = useState(false);
  return (
    <>
      <div className="card children-stacked p-rel">
        <div className="card-badge">{item.priority}</div>

        <div className="card-header d-flex">
          <div className="card-title">{item.title} </div>
          <button className="btn btn-link">
            <MdOutlinePushPin size={25} />
          </button>
        </div>
        <div className="card-content">
          <div> {item.body}</div>
          <div>Created at:</div>
        </div>
        {showPalette && <ColorPalette />}
        <div className="card-action children-center">
          <button
            className="btn btn-link"
            onClick={() => setShowPalette(prev => !prev)}
          >
            <MdPalette size={20} />
          </button>
          <button className="btn btn-link">
            <MdEdit size={20} />
          </button>
          <button className="btn btn-link">
            <MdArchive size={20} />
          </button>
          <button className="btn btn-link">
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
