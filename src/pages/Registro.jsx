import { useState } from 'react'

export default function Registro() {
  const [nombre, setNombre] = useState("")
  const [registrado, setRegistrado] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Nombre registrado:", nombre)
    setRegistrado(nombre)   // 👈 Guardamos el nombre para mostrarlo en pantalla
    setNombre("")           // limpiamos el input
  }

  return (
    <>
      <h1>Registro</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>

      {/* 👇 Aquí lo mostramos en pantalla */}
      {registrado && (
        <p style={{ marginTop: "20px", fontSize: "20px" }}>
          Último nombre registrado: <strong>{registrado}</strong>
        </p>
      )}
    </>
  )
}
