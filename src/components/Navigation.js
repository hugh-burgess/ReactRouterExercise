import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <img className="logoImage" src={logo} alt="harry potter" />
      <div className="navWrapper">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/characters">
          Characters
        </NavLink>
      </div>
    </nav>
  );
}
