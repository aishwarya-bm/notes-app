import "./tags.css";
import { Header, Sidenav } from "components";
import { useLogin, useNotes } from "contexts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LabelsModal } from "components/labels-modal/LabelsModal";
export function Tags() {
  const { tags } = useNotes();
  const [showLabelsModal, setShowLabelsModal] = useState(false);
  return (
    <>
      <Header />
      <Sidenav />
      <div className="notes-container">
        <div className="d-flex tags-header">
          <h3 className="text-center">Tags - {tags.length}</h3>
          <button
            className="btn btn-primary"
            onClick={() => setShowLabelsModal(true)}
          >
            Add tag
          </button>
        </div>

        {tags.length === 0 ? (
          <>
            <div className="not-found">
              <h5 className="text-center">
                Your have no items in the archives!
              </h5>
              <div className="d-flex children-center img-not-found">
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-128-thumb/tag-mark-bookmark-trade-shopping-1-51526.png"
                  alt="archive"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <ul className="d-flex list-no-bullet grid-gap tag-list">
              {tags?.map((item, idx) => {
                return (
                  <li key={"tag" + idx} className="children-center tag-card">
                    {item}
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {showLabelsModal && (
          <LabelsModal
            setShowLabelsModal={setShowLabelsModal}
            isTagPage={true}
          />
        )}
      </div>
    </>
  );
}
