import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import { getTodos } from './api/todoApi'
import TodoForm from './components/TodoForm'


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos().then(data => setTodos(data))
  }, [])

  function handleTodoCreated(todos) {
    setTodos(todos)
  }

  function handleTodoUpdated(todos) {
    setTodos(todos)
  }

  return (
    <div>
      <h1>Minha Todo List</h1>
      <TodoForm onTodoCreated={handleTodoCreated} />
      {[...todos]
        .sort((a, b) => a.prioridade - b.prioridade)
        .map(todo => (
          <TodoItem key={todo.id} todo={todo} onTodoUpdated={handleTodoUpdated} />
        ))}


    </div>
  )
}

export default App
