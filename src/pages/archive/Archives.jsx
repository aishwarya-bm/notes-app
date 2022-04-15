import "./archives.css";
import { Header, NoteCard, Sidenav } from "components";
import { useState } from "react";
export function Archives() {
  const notes = [];
  return (
    <>
      <Header />
      <Sidenav />
      <div className="notes-container">
        <h3 className="text-center">Archives - {notes.length}</h3>
        {notes.length === 0 ? (
          <>
            <div className="not-found">
              <h5 className="text-center">
                Your have no items in the archives!
              </h5>
              <div className="d-flex children-center img-not-found">
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/archive-5124885-4277584.png"
                  alt="archive"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-grid notes-list">
              {notes?.map((item, idx) => {
                return (
                  <>
                    <NoteCard item={item} />
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
