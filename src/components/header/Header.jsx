import { Navbrand, Search, Navpills } from "components";
import "./header.css";

export function Header({ showSearchBox }) {
  return (
    <>
      <nav className="nav-container d-flex">
        <Navbrand />
        {showSearchBox && <Search />}
        <Navpills />
      </nav>
    </>
  );
}
