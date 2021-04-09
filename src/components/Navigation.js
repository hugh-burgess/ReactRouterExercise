import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink exact to="/">
        Home
      </NavLink>

      <NavLink exact to="/about">
        About
      </NavLink>

      <NavLink exact to="/hobbies">
        Hobbies
      </NavLink>

      <NavLink exact to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}
