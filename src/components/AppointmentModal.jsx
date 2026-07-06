import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import './AppointmentModal.css'

const tratamientos = ['Limpieza Dental', 'Blanqueamiento', 'Ortodoncia', 'Implantes Dentales', 'Carillas', 'Endodoncia']
const horas = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']
const initialState = { nombre: '', email: '', telefono: '', fecha: null, hora: '', tratamiento: '' }

export default function AppointmentModal({ show, onClose }) {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})

  // bloquea scroll del body mientras el modal esté abierto
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [show])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  function validate() {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'El nombre es requerido'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Ingresa un email válido'
    if (!/^\d{9,}$/.test(form.telefono)) e.telefono = 'Ingresa al menos 9 dígitos'
    if (!form.fecha) e.fecha = 'Selecciona una fecha'
    if (!form.hora) e.hora = 'Selecciona una hora'
    if (!form.tratamiento) e.tratamiento = 'Selecciona un tratamiento'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const nuevaCita = {
        ...form,
        id: Date.now(),
        fecha: form.fecha.toLocaleDateString('es-CL'),
      }
      // guarda en localStorage sin mostrar en pantalla
      const citasPrevias = JSON.parse(localStorage.getItem('citas') || '[]')
      localStorage.setItem('citas', JSON.stringify([nuevaCita, ...citasPrevias]))
      setForm(initialState)
      setErrors({})
    }
  }

  if (!show) return null

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold">Agendar Cita</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Nombre completo</label>
                    <input name="nombre" className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} value={form.nombre} onChange={handleChange} />
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input name="email" type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} value={form.email} onChange={handleChange} />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Teléfono</label>
                    <input name="telefono" type="tel" className={`form-control ${errors.telefono ? 'is-invalid' : ''}`} value={form.telefono} onChange={handleChange} />
                    {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Fecha</label>
                    <DatePicker
                      selected={form.fecha}
                      onChange={date => {
                        setForm({ ...form, fecha: date })
                        if (errors.fecha) setErrors({ ...errors, fecha: '' })
                      }}
                      className={`form-control ${errors.fecha ? 'is-invalid' : ''}`}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()} // no permite fechas pasadas
                      placeholderText="Selecciona una fecha"
                    />
                    {errors.fecha && <div className="invalid-feedback d-block">{errors.fecha}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Hora</label>
                    <select name="hora" className={`form-select ${errors.hora ? 'is-invalid' : ''}`} value={form.hora} onChange={handleChange}>
                      <option value="">Seleccionar horario</option>
                      {horas.map(h => <option key={h} value={h}>{h}</option>)}
                    </select>
                    {errors.hora && <div className="invalid-feedback">{errors.hora}</div>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Tratamiento</label>
                    <select name="tratamiento" className={`form-select ${errors.tratamiento ? 'is-invalid' : ''}`} value={form.tratamiento} onChange={handleChange}>
                      <option value="">Seleccionar tratamiento</option>
                      {tratamientos.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.tratamiento && <div className="invalid-feedback">{errors.tratamiento}</div>}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4 w-100">Confirmar Cita</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
