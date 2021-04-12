import { NavLink } from 'react-router-dom'
import logo from '../images/logo.svg'

export default function Navigation() {
  return (
    <nav className="Navigation">
      <a
        href="https://github.com/akabab/starwars-api#alljson"
        rel="noreferrer"
        target="_blank"
       id="top"
      >
        <img className="logoImage" src={logo} alt="star wars" />
      </a>
      <div className="navWrapper">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/characters">
          Characters
        </NavLink>
      </div>
    </nav>
  )
}
