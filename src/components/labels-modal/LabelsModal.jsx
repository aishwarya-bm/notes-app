import { useEffect, useState } from "react";
import "./labelsmodal.css";
import { useNavigate } from "react-router-dom";
import { MdNewLabel, MdLabel } from "react-icons/md";

export function LabelsModal({ setShowLabelsModal, newNote, setNewNote }) {
  let { labels: note_labels } = newNote;
  const labels = ["label1", "label2", "label3", "label4"];

  const navigate = useNavigate();

  const isLabelInNote = item => {
    console.log(note_labels.find(i => i === item));
    return note_labels.find(i => i === item) ? true : false;
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
                            className="btn btn-link add-tag-btn label-selected"
                            onClick={() => {
                              note_labels = note_labels.filter(l => l !== item);
                              setNewNote({ ...newNote, labels: note_labels });
                            }}
                          >
                            <MdLabel size={25} />
                          </button>
                        ) : (
                          <button
                            className="btn btn-link add-tag-btn label-unselected"
                            onClick={() => {
                              note_labels.push(item);
                              setNewNote({ ...newNote, labels: note_labels });
                            }}
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
