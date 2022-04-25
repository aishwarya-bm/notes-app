import { useFilterNotes } from "contexts";

export function Search() {
  const { stateFilter, dispatchFilter } = useFilterNotes();
  return (
    <>
      <div className="d-flex p-rel">
        <input
          type="text"
          placeholder="search by title"
          value={stateFilter.searchText}
          onChange={event =>
            dispatchFilter({
              type: "SET_SEARCH",
              payload: event.target.value,
            })
          }
        />
        <button
          className="btn btn-link nav-btn"
          style={{ position: "absolute", right: 0, color: "black" }}
          onClick={() => {
            dispatchFilter({
              type: "SET_SEARCH",
              payload: "",
            });
          }}
        >
          x
        </button>
      </div>
    </>
  );
}
