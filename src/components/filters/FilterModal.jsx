import { useFilterNotes, useNotes } from "contexts";
import "./filtermodal.css";
export function FilterModal({ setShowFilterModal }) {
  const { tags } = useNotes();
  const { stateFilter, dispatchFilter } = useFilterNotes();
  const { priority, sortByDate, tags: filterTags } = stateFilter;
  return (
    <>
      <div className="d-flex modal-container">
        <div className="modal children-stacked">
          <>
            <h5 className="text-center">Filter by:</h5>
            <div className="modal-body">
              <h6>Tags:</h6>
              <ul className="d-flex grid-gap filter-tags">
                {tags?.map((item, idx) => {
                  return (
                    <li className="d-flex" key={"filter-tag" + idx}>
                      <span className="">
                        <label>
                          <input
                            type="checkbox"
                            id={item}
                            name={item}
                            onChange={() => {
                              dispatchFilter({
                                type: "SET_TAG",
                                payload: item,
                              });
                            }}
                            checked={
                              filterTags.find(t => t === item) ? true : false
                            }
                            value={item}
                          />
                          {item}
                        </label>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <hr></hr>

              <h6>Date:</h6>
              <ul className="list list-no-bullet d-flex grid-gap">
                <li>
                  <label htmlFor="oldest">
                    <input
                      type="radio"
                      id="oldest"
                      name="oldest"
                      checked={sortByDate === "oldest"}
                      value="oldest"
                      onChange={() =>
                        dispatchFilter({
                          type: "SET_DATE",
                          payload: "oldest",
                        })
                      }
                    />
                    oldest
                  </label>
                </li>
                <li>
                  <label htmlFor="latest">
                    <input
                      type="radio"
                      id="latest"
                      name="latest"
                      value="latest"
                      checked={sortByDate === "latest"}
                      onChange={() =>
                        dispatchFilter({ type: "SET_DATE", payload: "latest" })
                      }
                    />
                    latest
                  </label>
                </li>
              </ul>
              <hr></hr>

              <h6>Priority:</h6>
              <ul className="list list-no-bullet d-flex grid-gap">
                <li>
                  <label htmlFor="low">
                    <input
                      type="radio"
                      id="low"
                      name="low"
                      checked={priority === "low"}
                      onChange={() =>
                        dispatchFilter({ type: "SET_PRIORITY", payload: "low" })
                      }
                    />
                    low
                  </label>
                </li>
                <li>
                  <label htmlFor="medium">
                    <input
                      type="radio"
                      id="medium"
                      name="medium"
                      checked={priority === "medium"}
                      onChange={() =>
                        dispatchFilter({
                          type: "SET_PRIORITY",
                          payload: "medium",
                        })
                      }
                    />
                    medium
                  </label>
                </li>
                <li>
                  <label htmlFor="high">
                    <input
                      type="radio"
                      id="high"
                      name="high"
                      checked={priority === "high"}
                      onChange={() =>
                        dispatchFilter({
                          type: "SET_PRIORITY",
                          payload: "high",
                        })
                      }
                    />
                    high
                  </label>
                </li>
              </ul>
              <hr></hr>
            </div>
          </>

          <div className="d-flex children-center modal-actions grid-gap">
            <div className="d-flex">
              <button
                className="btn btn-primary modal-btn"
                onClick={() =>
                  dispatchFilter({
                    type: "CLEAR_FILTER",
                  })
                }
              >
                Clear
              </button>
              <button
                className="btn btn-light modal-btn"
                onClick={() => {
                  setShowFilterModal(false);
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
