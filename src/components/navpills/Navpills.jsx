import { Link } from "react-router-dom";
import "./navpills.css";
import { useLogin } from "contexts";
import { signoutUser } from "utils";

export function Navpills() {
  const { isLoggedIn, dispatchUser } = useLogin();
  return (
    <>
      <div className="nav-right nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          {!isLoggedIn && (
            <li className="list-item">
              <Link to="/signup" className="btn btn-link nav-btn">
                LOGIN
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li className="list-item">
                <Link to="/profile">
                  <i className="fa fas fa-user btn btn-link nav-btn" />
                </Link>
              </li>
              <li className="list-item">
                <Link to="/signup">
                  <i
                    className="fa fas fa-sign-out-alt btn btn-link nav-btn"
                    onClick={() => signoutUser(dispatchUser)}
                  ></i>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
