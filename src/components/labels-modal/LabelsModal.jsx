import { useEffect, useState } from "react";
import "./labelsmodal.css";
import { useNavigate } from "react-router-dom";
import { MdNewLabel, MdLabelOff } from "react-icons/md";

export function LabelsModal({ setShowLabelsModal }) {
  const [playlistName, setPlaylistName] = useState("");

  const labels = ["label1", "label2", "label3", "label4"];

  const navigate = useNavigate();

  const playListNameChangeHandler = event => {
    setPlaylistName(event.target.value);
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
                  labels?.map(item => {
                    return (
                      <li className="d-flex label-items">
                        <button className="btn btn-link add-tag-btn">
                          <MdNewLabel size={25} />
                        </button>
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
