import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import { getTodos, deleteTodo } from './api/todoApi'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')
  const [clearingIds, setClearingIds] = useState([])

  useEffect(() => {
    getTodos().then(data => setTodos(data))
  }, [])

  function handleTodoCreated(todos) { setTodos(todos) }
  function handleTodoUpdated(todos) { setTodos(todos) }
  function handleTodoDeleted(todos) { setTodos(todos) }

  async function handleClearDone() {
    const done = todos.filter(t => t.realizado)
    setClearingIds(done.map(t => t.id))
    setTimeout(async () => {
      await Promise.all(done.map(t => deleteTodo(t.id)))
      getTodos().then(data => { setTodos(data); setClearingIds([]) })
    }, 450)
  }

  const hasDone = todos.some(t => t.realizado)
  function fuzzyMatch(text, query) {
    const t = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    const q = query.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    let i = 0
    for (const char of t) {
      if (char === q[i]) i++
      if (i === q.length) return true
    }
    return false
  }

  const filtered = search ? todos.filter(t => fuzzyMatch(t.nome, search)) : todos

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="app-layout">
        <aside className="app-form">
          <TodoForm onTodoCreated={handleTodoCreated} />
        </aside>
        <section className="app-list">
          <div className="search-wrapper">
            <input
              className="search-input"
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          {[...filtered]
            .sort((a, b) => {
              if (a.realizado !== b.realizado) return a.realizado ? 1 : -1
              return b.prioridade - a.prioridade
            })
            .map(todo => (
              <TodoItem key={todo.id} todo={todo} onTodoUpdated={handleTodoUpdated} onTodoDeleted={handleTodoDeleted} isClearing={clearingIds.includes(todo.id)} />
            ))}
          {hasDone && (
            <div className="btn-clear-done-wrapper">
              <button className="btn-clear-done" onClick={handleClearDone}>
                Clear done
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
