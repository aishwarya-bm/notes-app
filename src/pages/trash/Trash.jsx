import "./trash.css";
import { Header, NoteCard, Sidenav } from "components";
import { useNotes } from "contexts";
export function Trash() {
  const { trash } = useNotes();
  return (
    <>
      <Header />
      <Sidenav />
      <div className="notes-container">
        <h3 className="text-center">Trash - {trash.length}</h3>
        {trash.length === 0 ? (
          <>
            <div className="not-found">
              <h5 className="text-center">Your have no items in trash!</h5>
              <div className="d-flex children-center img-not-found">
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-64-thumb/recycle-bin-1525743-1293528.png"
                  alt="trash"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="d-grid notes-list">
              {trash?.map((item, idx) => {
                return (
                  <div key={"trash" + idx}>
                    <NoteCard noteItem={item} isTrashPage={true} />
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
