import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Todos from './pages/Todos'
import Registro from './pages/Registro'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/todos">Todos</Link> |{" "}
        <Link to="/registro">Registro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  )
}

export default App
