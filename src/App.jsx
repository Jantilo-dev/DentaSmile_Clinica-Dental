import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Treatments from './components/Treatments'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AppointmentModal from './components/AppointmentModal'
import './App.css'

export default function App() {
  const [showModal, setShowModal] = useState(false) // controla visibilidad del modal

  return (
    <>
      <Navbar onOpenModal={() => setShowModal(true)} />
      <main>
        <Hero onOpenModal={() => setShowModal(true)} />
        <Treatments onOpenModal={() => setShowModal(true)} />
        <Team />
        <Contact />
      </main>
      <Footer />
      <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
