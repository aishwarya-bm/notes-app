import "./trash.css";
import { Header, NoteCard, Sidenav } from "components";
import { useState } from "react";
export function Trash() {
  const notes = [];
  return (
    <>
      <Header />
      <Sidenav />
      <div className="notes-container">
        <h3 className="text-center">Trash - {notes.length}</h3>
        {notes.length === 0 ? (
          <>
            <div className="not-found">
              <h5 className="text-center">Your have no items in trash!</h5>
              <div className="d-flex children-center img-not-found">
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/trash-delete-replace-block-disabled-1-51529.png"
                  alt="trash"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-flex notes-list">
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
