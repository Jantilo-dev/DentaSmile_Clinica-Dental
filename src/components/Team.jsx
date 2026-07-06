import './Team.css'

// Equipo profesional: cada uno con un color distintivo para su SVG
const equipo = [
  { id: 1, nombre: 'Dra. María García',  especialidad: 'Odontóloga General', color: '#0d6efd' },
  { id: 2, nombre: 'Dr. Carlos López',   especialidad: 'Ortodoncista',       color: '#198754' },
  { id: 3, nombre: 'Dra. Ana Martínez',  especialidad: 'Endodoncista',       color: '#dc3545' },
  { id: 4, nombre: 'Dr. Pedro Sánchez',  especialidad: 'Implantólogo',       color: '#6f42c1' },
]

// SVG inline de silueta de persona (cabeza + torso)
function PersonSVG({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill={color} viewBox="0 0 16 16">
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M8 9c-3.5 0-6 2.5-6 6h12c0-3.5-2.5-6-6-6z" />
    </svg>
  )
}

export default function Team() {
  return (
    <section id="equipo" className="py-5">
      <div className="container">
        <h2 className="text-center mb-2 fw-bold">Nuestro Equipo</h2>
        <p className="text-center text-secondary mb-4">
          Profesionales altamente calificados para cuidar tu salud dental
        </p>

        {/* Grid: 4 cols en md, 2 en sm, 1 en xs */}
        <div className="row g-4 justify-content-center">
          {equipo.map(m => (
            <div className="col-6 col-md-3" key={m.id}>
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body">
                  <PersonSVG color={m.color} />
                  <h6 className="card-title mt-3 fw-bold">{m.nombre}</h6>
                  <small className="text-secondary">{m.especialidad}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
