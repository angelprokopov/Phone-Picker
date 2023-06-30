import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/phones">PRODUCTS</NavLink>
          </li>
          <li>
            <NavLink to="/registration">LOGIN</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
