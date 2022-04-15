import "./filtermodal.css";
import { MdNewLabel, MdLabelOff } from "react-icons/md";
export function FilterModal({ setShowFilterModal }) {
  const labels = ["label1", "label2", "label3", "label4"];
  return (
    <>
      <div className="d-flex modal-container">
        <div className="modal children-stacked">
          <>
            <div className="modal-header d-flex">
              <h5>Filter by:</h5>
            </div>
            <div className="modal-body">
              <h6>Tags:</h6>
              <ul className="d-flex grid-gap filter-tags">
                {labels &&
                  labels?.map(item => {
                    return (
                      <li className="d-flex">
                        <span className="">
                          <label>
                            <input type="checkbox" /> &nbsp;
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
                    <input type="radio" id="oldest" name="oldest" />
                    oldest
                  </label>
                </li>
                <li>
                  <label htmlFor="latest">
                    <input type="radio" id="latest" name="latest" />
                    latest
                  </label>
                </li>
              </ul>
              <hr></hr>

              <h6>Priority:</h6>
              <ul className="list list-no-bullet d-flex grid-gap">
                <li>
                  <label htmlFor="low">
                    <input type="radio" id="low" name="low" />
                    low
                  </label>
                </li>
                <li>
                  <label htmlFor="medium">
                    <input type="radio" id="medium" name="medium" />
                    medium
                  </label>
                </li>
                <li>
                  <label htmlFor="high">
                    <input type="radio" id="high" name="high" />
                    high
                  </label>
                </li>
              </ul>
              <hr></hr>
            </div>
          </>

          <div className="d-flex children-center modal-actions grid-gap">
            <div className="d-flex">
              <button className="btn btn-primary modal-btn">Clear</button>
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
