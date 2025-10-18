import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Scroll from "../components/scroll";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header-container container display-flex align-center space-between height-12">
      <Link to="/">
        <img className="logo" src="/public/logo.webp" alt="Logo" />
      </Link>

      {/* Botón hamburguesa */}
       <button className="hamburger-btn" onClick={toggleMenu}>
        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </button>

        <nav className={`navbar align-end relative display-flex space-between gap-3 ${isOpen ? "open" : ""}`}>
          <Link className="link font-color-3" to="/" onClick={closeMenu}>Inicio</Link>
          <Link className="link font-color-3" to="/nosotros" onClick={closeMenu}>Nosotros</Link>
          <Link className="link font-color-3" to="/servicios" onClick={closeMenu}>Servicios</Link>
          <Link className="link font-color-3" to="/contacto" onClick={closeMenu}>Contacto</Link>
        </nav>
    </header>
  );
}
