import { Link } from "react-router-dom";
import Scroll from "../components/scroll";
import "./header.css"


export default function Header() {
  return (
    <header className="header-container container display-flex align-center space-between height-12">
        <Link to='/'> <img className="logo" src="/public/logo.webp" alt="" srcset="" /> </Link>
        <Scroll>
        <nav className="navbar align-end relative display-flex space-between gap-3">
            <Link to='/'> <a className="font-color-3" href="/">Inicio</a></Link>
            <Link to= '/nosotros'><a className="font-color-3" href="/nosotros">Nosotros</a></Link>
            <Link to= '/servicios'><a className="font-color-3" href="/servicios">Servicios</a></Link>
            <Link to= '/contacto'><a className="font-color-3" href="/contacto">Contacto</a></Link>
        </nav>
        </Scroll>
    </header>
    )}