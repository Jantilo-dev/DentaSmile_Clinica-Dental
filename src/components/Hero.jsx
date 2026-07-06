import './Hero.css'

export default function Hero({ onOpenModal }) {
  return (
    <section id="hero" className="bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Texto + CTA */}
          <div className="col-lg-6 py-5 pe-lg-4">
            <h1 className="display-4 fw-bold text-primary">
              Tu sonrisa,<br />nuestra prioridad
            </h1>
            <p className="lead text-secondary mb-4">
              Expertos en cuidado dental con tecnología de punta.
              Brindamos servicios odontológicos de calidad para toda la familia.
            </p>
            <button className="btn btn-primary btn-lg" onClick={onOpenModal}>
              Agenda tu cita
            </button>
          </div>
          {/* Imagen de portada */}
          <div className="col-lg-6 text-center hero-img">
            <img src="/portada.jpg" alt="Clínica DentaSmile" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  )
}
