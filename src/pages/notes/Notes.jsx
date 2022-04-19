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
import { useEffect } from "react";
import { getAllNotes } from "utils/notes-utils";
import { useLogin, useNotes } from "contexts";
import { useNavigate } from "react-router-dom";

export function Notes() {
  const [showEditor, setShowEditor] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();
  const { notes, dispatchNotes } = useNotes();

  useEffect(() => getAllNotes(isLoggedIn, dispatchNotes, navigate), []);
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
                <FcFilledFilter size={20} />
                Filter
              </span>
            </button>

            <Search />
          </div>
        </div>
        {showEditor && <Addnote setShowEditor={setShowEditor} />}

        {notes.length === 0 ? (
          <>
            <div className="not-found">
              <h5 className="text-center">You have not added any notes yet!</h5>
              <div className="d-flex children-center img-not-found">
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-128-thumb/blank-book-2923956-2445975.png"
                  alt="archive"
                />
              </div>
            </div>
          </>
        ) : (
          <ul className="d-grid notes-list">
            {notes?.map((item, idx) => {
              return (
                <>
                  <li key={idx} className="list-no-bullet">
                    <NoteCard
                      item={item}
                      showEditor={showEditor}
                      setShowEditor={setShowEditor}
                    />
                  </li>
                </>
              );
            })}
          </ul>
        )}
        {showFilterModal && (
          <FilterModal setShowFilterModal={setShowFilterModal} />
        )}
      </div>
    </>
  );
}
