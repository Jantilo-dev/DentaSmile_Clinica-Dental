import './Footer.css'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Marca */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold">DentaSmile</h6>
            <small className="text-secondary">
              Tu clínica dental de confianza. Cuidamos tu sonrisa con excelencia y calidez.
            </small>
          </div>

          {/* Contacto */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="fw-bold">Contacto</h6>
            <small className="text-secondary d-block">📞 +56 9 1234 5678</small>
            <small className="text-secondary d-block">✉️ contacto@dentasmile.cl</small>
            <small className="text-secondary d-block">📍 Av. Principal 123, Santiago</small>
          </div>

          {/* Horarios */}
          <div className="col-md-4">
            <h6 className="fw-bold">Horarios</h6>
            <small className="text-secondary d-block">Lun - Vie: 9:00 - 18:00</small>
            <small className="text-secondary d-block">Sáb: 9:00 - 13:00</small>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        <p className="text-center text-secondary small mb-0">
          &copy; {new Date().getFullYear()} DentaSmile. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
