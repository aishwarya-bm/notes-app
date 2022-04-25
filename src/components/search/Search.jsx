import { useFilterNotes } from "contexts";
import "./search.css";
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
          className="btn btn-link nav-btn clear-search"
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
