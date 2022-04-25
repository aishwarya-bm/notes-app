import "./archives.css";
import { Header, NoteCard, Sidenav } from "components";
import { useLogin, useNotes } from "contexts";
import { getArchivedNotes } from "utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function Archives() {
  const { archives, dispatchNotes } = useNotes();
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();
  useEffect(() => getArchivedNotes(isLoggedIn, dispatchNotes, navigate), []);
  return (
    <>
      <Header />
      <Sidenav />
      <div className="notes-container">
        <h3 className="text-center">Archives - {archives.length}</h3>
        {archives.length === 0 ? (
          <>
            <div className="not-found">
              <h5 className="text-center">
                Your have no items in the archives!
              </h5>
              <div className="d-flex children-center img-not-found">
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/archive-4611695-3812312.png"
                  alt="archive"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-grid notes-list">
              {archives?.map((item, idx) => {
                return (
                  <div key={"archive" + idx}>
                    <NoteCard item={item} isArchivePage={true} />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
