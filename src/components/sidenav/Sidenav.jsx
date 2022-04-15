import { NavLink } from "react-router-dom";
import { MdNote, MdHome, MdArchive, MdDelete, MdLabel } from "react-icons/md";
import "./sidenav.css";

export function Sidenav() {
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          color: "var(--primary-dark)",
        }
      : {};

  return (
    <div className="sidenav-pills d-flex children-stacked p-fixed ">
      <NavLink to="/" className="btn btn-link nav-btn" style={getActiveStyle}>
        <span className="d-flex sidenav-item">
          <MdHome size={25} /> <span className="btn-label">&nbsp; Home</span>
        </span>
      </NavLink>
      <NavLink
        to="/notes"
        className="btn btn-link nav-btn"
        style={getActiveStyle}
      >
        <span className="d-flex sidenav-item">
          <MdNote size={25} />
          <span className="btn-label"> &nbsp; Notes</span>
        </span>
      </NavLink>
      <NavLink
        to="/tags"
        className="btn btn-link nav-btn"
        style={getActiveStyle}
      >
        <span className="d-flex sidenav-item">
          <MdLabel size={25} /> <span className="btn-label"> &nbsp;Tags</span>
        </span>
      </NavLink>
      <NavLink
        to="/archives"
        className="btn btn-link nav-btn"
        style={getActiveStyle}
      >
        <span className="d-flex sidenav-item">
          <MdArchive size={25} />
          <span className="btn-label"> &nbsp; Archives</span>
        </span>
      </NavLink>

      <NavLink
        to="/trash"
        className="btn btn-link nav-btn "
        style={getActiveStyle}
      >
        <span className="d-flex sidenav-item">
          <MdDelete size={25} /> <span className="btn-label"> &nbsp;Trash</span>
        </span>
      </NavLink>
    </div>
  );
}
