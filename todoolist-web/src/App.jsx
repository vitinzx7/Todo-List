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

  function handleTodoDeleted(todos) {
    setTodos(todos)
  }

  return (
    <div className="app">
      <h1>Minha Todo List</h1>
      <div className="app-layout">
        <aside className="app-form">
          <TodoForm onTodoCreated={handleTodoCreated} />
        </aside>
        <section className="app-list">
          {[...todos]
            .sort((a, b) => a.prioridade - b.prioridade)
            .map(todo => (
              <TodoItem key={todo.id} todo={todo} onTodoUpdated={handleTodoUpdated} onTodoDeleted={handleTodoDeleted} />
            ))}
        </section>
      </div>


    </div>
  )
}

export default App
