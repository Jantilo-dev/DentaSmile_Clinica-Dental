import { useState } from 'react'
import './Contact.css'

const initialState = { nombre: '', email: '', telefono: '', mensaje: '' }

export default function Contact() {
  const [form, setForm] = useState(initialState) // valores del formulario
  const [errors, setErrors] = useState({})        // errores por campo
  const [submitted, setSubmitted] = useState(false) // alerta de éxito

  // actualiza el campo editado y limpia su error si existía
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  // valida todos los campos y devuelve objeto con errores
  function validate() {
    const e = {}
    if (!form.nombre.trim() || form.nombre.trim().length < 3)
      e.nombre = 'El nombre debe tener al menos 3 caracteres'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Ingresa un email válido'
    if (!/^\d{9,}$/.test(form.telefono))
      e.telefono = 'Ingresa al menos 9 dígitos'
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10)
      e.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setForm(initialState)
      setTimeout(() => setSubmitted(false), 4000) // oculta alerta tras 4s
    }
  }

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-2 fw-bold">Contáctanos</h2>
        <p className="text-center text-secondary mb-4">
          Déjanos tus datos y te responderemos a la brevedad
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            {submitted && (
              <div className="alert alert-success text-center" role="alert">
                Mensaje enviado con éxito. Te contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  id="nombre" name="nombre"
                  className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                  value={form.nombre} onChange={handleChange}
                />
                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email" name="email" type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={form.email} onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  id="telefono" name="telefono" type="tel"
                  className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                  value={form.telefono} onChange={handleChange}
                />
                {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  id="mensaje" name="mensaje" rows="4"
                  className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                  value={form.mensaje} onChange={handleChange}
                ></textarea>
                {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
