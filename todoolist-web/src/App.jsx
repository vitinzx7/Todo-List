import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import { getTodos } from './api/todoApi'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos().then(data => setTodos(data))
  }, [])

  return (
    <div>
      <h1>Minha Todo List</h1>
      {todos.map(todo => (
        <TodoItem todo={todo} />
      ))}
    </div>
  )
}

export default App
