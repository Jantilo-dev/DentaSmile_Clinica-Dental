import './Treatments.css'

// Datos de los 6 tratamientos (imagen desde /public/)
const tratamientos = [
  { id: 1, nombre: 'Limpieza Dental',     img: '/limpiezadental.jpg',     descripcion: 'Eliminación de sarro y placa bacteriana. Incluye pulido dental y aplicación de flúor para una sonrisa saludable.', precio: '$15.000' },
  { id: 2, nombre: 'Blanqueamiento',      img: '/blanqueamiento.jpg',     descripcion: 'Tratamiento estético para una sonrisa más brillante. Resultados visibles desde la primera sesión.',          precio: '$80.000' },
  { id: 3, nombre: 'Ortodoncia',          img: '/ortodoncia.jpg',         descripcion: 'Corrección de la posición dental con brackets tradicionales o alineadores invisibles.',                    precio: '$250.000' },
  { id: 4, nombre: 'Implantes Dentales',  img: '/implantes%20dentales.jpg', descripcion: 'Reemplazo de piezas dentales con implantes de titanio de alta calidad y durabilidad.',                    precio: '$400.000' },
  { id: 5, nombre: 'Carillas',            img: '/carillas.jpg',           descripcion: 'Mejora estética dental con carillas de porcelana ultrafinas y resistentes a manchas.',                      precio: '$180.000' },
  { id: 6, nombre: 'Endodoncia',          img: '/endodoncia.jpg',         descripcion: 'Tratamiento de conducto para salvar dientes dañados o infectados, eliminando el dolor.',                   precio: '$150.000' },
]

export default function Treatments({ onOpenModal }) {
  return (
    <section id="tratamientos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-2 fw-bold">Nuestros Tratamientos</h2>
        <p className="text-center text-secondary mb-4">
          Ofrecemos una amplia gama de servicios odontológicos con los mejores estándares de calidad.
        </p>

        {/* Grid de tarjetas: 3 cols en lg, 2 en sm, 1 en mobile */}
        <div className="row g-4">
          {tratamientos.map(t => (
            <div className="col-sm-6 col-lg-4" key={t.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img src={t.img} className="card-img-top" alt={t.nombre} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{t.nombre}</h5>
                  {/* flex-grow-1 empuja precio y botón al fondo */}
                  <p className="card-text text-secondary small flex-grow-1">{t.descripcion}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fs-4 fw-bold text-primary">{t.precio}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={onOpenModal}>
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
