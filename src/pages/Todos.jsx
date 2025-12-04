import { useEffect, useState } from 'react'

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [nuevoTodo, setNuevoTodo] = useState("")
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  // FETCH inicial con useEffect
  useEffect(() => {
    const fetchTodos = async () => {
      setCargando(true)
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        const data = await res.json()
        setTodos(data)
      } catch (err) {
        setError("Error cargando todos")
      } finally {
        setCargando(false)
      }
    }

    fetchTodos()
  }, [])
  // Crear nuevo todo
  const handleSubmit = (e) => {
    e.preventDefault()
    if (nuevoTodo.trim() === "") return

    const nuevo = {
      id: Date.now(),
      title: nuevoTodo,
      completed: false
    }

    setTodos([nuevo, ...todos])
    setNuevoTodo("")
  }

  // Cambiar estado completado
  const toggleTodo = (id) => {
    setTodos(
      todos.map(t => 
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  // Eliminar todo
  const eliminarTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <>
      <h1>Lista de Todos</h1>

      {cargando && <p>Cargando... </p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Nuevo todo"
          value={nuevoTodo}
          onChange={(e) => setNuevoTodo(e.target.value)}
          required
        />
        <button>Agregar </button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span 
              style={{ 
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.title}
            </span>
            <button onClick={() => eliminarTodo(todo.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}