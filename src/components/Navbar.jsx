import { useState } from "react";

function Navbar() {
    const [showMenu, setShowMenu] = useState(1);

    const toggleMenu = () => document.querySelector('.nav-links').classList.toggle('active');

  return (
    <nav>
      <img
        className="nav-toggle"
        src="./src/assets/icons/list.svg"
        alt="toggle button"
        onClick={toggleMenu}
      />

      <ul className="nav-links">
        <li className="link">
          <a className="link-a" href="#">
            Servicios
          </a>
        </li>
        <li className="link">
          <a className="link-a" href="#">
            Voluntariados
          </a>
        </li>
        <li className="link">
          <a className="link-a" href="#">
            Contacto
          </a>
        </li>
        <li className="link">
          <a className="link-a" href="#">
            Testimonios
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
