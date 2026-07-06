import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ onOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false) // toggle menú hamburguesa

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        {/* Logo + marca */}
        <a className="navbar-brand fw-bold" href="#hero">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="me-2" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
            <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          DentaSmile
        </a>

        {/* Botón hamburguesa (visible solo en mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#hero">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#tratamientos">Tratamientos</a></li>
            <li className="nav-item"><a className="nav-link" href="#equipo">Equipo</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
          <button className="btn btn-light ms-lg-3 mt-2 mt-lg-0" onClick={onOpenModal}>
            Agendar Cita
          </button>
        </div>
      </div>
    </nav>
  )
}
