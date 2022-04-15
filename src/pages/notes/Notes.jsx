import {
  Addnote,
  FilterModal,
  Header,
  NoteCard,
  Search,
  Sidenav,
} from "components";
import "./notes.css";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { FcFilledFilter } from "react-icons/fc";

export function Notes() {
  const [showEditor, setShowEditor] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [notes, showNotes] = useState([
    {
      title: "note 1",
      body: "description for note 1",
      priority: "high",
      label: "work",
    },
    {
      title: "note 2",
      body: "description for note 2",
      priority: "medium",
      label: "home",
    },
    {
      title: "note 3",
      body: "description for note 3",
      priority: "low",
      label: "other",
    },
    {
      title: "note 4",
      body: "description for note 4",
      priority: "low",
      label: "other",
    },
  ]);
  return (
    <>
      <Header />
      <Sidenav />
      <div className="notes-container">
        <div className="d-flex grid-gap notes-header">
          <button
            className="btn btn-primary"
            onClick={() => setShowEditor(true)}
          >
            <span className="children-center">
              <MdAdd /> &nbsp; Add note
            </span>
          </button>

          <div className="d-flex grid-gap filter-options">
            <button
              className="btn btn-light children-center"
              onClick={() => setShowFilterModal(true)}
            >
              <span className="children-center">
                <FcFilledFilter size={25} />
                Filter
              </span>
            </button>

            <Search />
          </div>
        </div>
        {showEditor && <Addnote setShowEditor={setShowEditor} />}
        <div className="d-flex notes-list">
          {notes?.map((item, idx) => {
            return (
              <>
                <NoteCard item={item} />
              </>
            );
          })}
        </div>

        {showFilterModal && (
          <FilterModal setShowFilterModal={setShowFilterModal} />
        )}
      </div>
    </>
  );
}
