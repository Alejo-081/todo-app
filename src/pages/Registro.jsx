import { useState } from 'react'

export default function Registro() {
  const [nombre, setNombre] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Nombre registrado:", nombre)
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
        <button>Registrar</button>
      </form>
    </>
  )
}

