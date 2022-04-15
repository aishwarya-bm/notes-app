import { Link } from "react-router-dom";
import "./navbrand.css";

export function Navbrand() {
  return (
    <>
      <div className="nav-brand">
        <Link to="/">
          <div className="nav-title d-flex children-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/hanging-slate-3418807-2850274.png"
              alt="favicon"
              className="app-icon"
            />
            Slate
          </div>
        </Link>
      </div>
    </>
  );
}
