import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'
import Equipo from './equipo'
import Favoritos from './favoritos'
import Home from './home'
import Informativa from './informativa'
import Original from './original'
import Usuarios from './usuarios'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <nav className='Menu'>

        <Route path="/" element={<Home />} />

        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="/original" element={<Original />} />

        <Route path="/informativa" element={<Informativa />} />

        <Route path="/usuario" element={<Usuarios />} />

        <Route path="/equipo/:equipo" element={<Equipo />} />
      <nav/>
      </Routes>

      <Link to="./Favoritos">Favoritos</Link>
      <Link to="./Home">Home</Link>
      <Link to="./Original">Original</Link>
      <Link to="./Usuarios">Usuarios</Link>
      <Link to="./Equipo">Equipo</Link>
      <Link to="./Informativa">Informativ</Link>
    </Router>

  )
}

export default App
