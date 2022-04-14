import { Link } from "react-router-dom";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import "./navpills.css";
import { useTheme } from "../../contexts/theme/theme-context";

export function Navpills() {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <>
      <div className="nav-right nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          <li className="list-item">
            <button className="btn btn-link nav-btn" onClick={() => setTheme()}>
              {theme === "light" ? <MdWbSunny /> : <FaMoon />}
            </button>
          </li>
          <li className="list-item">
            <Link to="/signup" className="btn btn-link nav-btn">
              LOGIN
            </Link>
          </li>

          <>
            <li className="list-item">
              <Link to="/">
                <i className="fa fas fa-user btn btn-link nav-btn" />
              </Link>
            </li>
            <li className="list-item">
              <Link to="/signup">
                <i className="fa fas fa-sign-out-alt btn btn-link nav-btn"></i>
              </Link>
            </li>
          </>
        </ul>
      </div>
    </>
  );
}
