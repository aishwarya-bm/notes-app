import { Link } from "react-router-dom";

export function Navpills() {
  return (
    <>
      <div className="nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          <li className="list-item">
            <Link to="/signup" className="btn btn-link nav-btn ">
              LOGIN
            </Link>
          </li>

          <>
            <li>
              <Link to="/">
                <i className="fa fas fa-user btn btn-link nav-btn" />
              </Link>
            </li>
            <Link to="/signup">
              <i className="fa fas fa-sign-out-alt btn btn-link nav-btn"></i>
            </Link>
          </>
        </ul>
      </div>
    </>
  );
}
