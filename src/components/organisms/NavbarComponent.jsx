import { NavLink } from "react-router-dom"

const NavbarComponent = () => (
  <nav>
    <ul>
      <li>
        <NavLink to='/home' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      </li>
      <li>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      </li>
      <li>
        <NavLink to='/users' className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink>
      </li>
    </ul>
  </nav>
)

export default NavbarComponent