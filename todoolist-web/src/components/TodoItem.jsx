import { useState } from 'react'
import './TodoItem.css'
import { updateTodo, deleteTodo } from '../api/todoApi'

const urgencyLabel = { 1: "Low", 2: "Medium", 3: "High", 4: "Maximum" }

function TodoItem({ todo, onTodoUpdated, onTodoDeleted }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(todo.nome)
  const [description, setDescription] = useState(todo.descricao)
  const [priority, setPriority] = useState(todo.prioridade)

  function handleSave(e) {
    e.stopPropagation()
    updateTodo({ ...todo, nome: name, descricao: description, prioridade: priority })
      .then(todos => onTodoUpdated(todos))
  }

  function handleToggle(e) {
    e.stopPropagation()
    updateTodo({ ...todo, realizado: !todo.realizado })
      .then(todos => onTodoUpdated(todos))
  }

  function handleDelete(e) {
    e.stopPropagation()
    deleteTodo(todo.id)
      .then(todos => onTodoDeleted(todos))
  }

  return (
    <div className="todo-item" onClick={() => setOpen(!open)}>
      <div className="todo-header">
        <p>
          <strong style={{ textDecoration: todo.realizado ? 'line-through' : 'none', opacity: todo.realizado ? 0.6 : 1 }}>
            {name}
          </strong>
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <small>{urgencyLabel[todo.prioridade]}</small>
          <span className={`status-dot ${todo.realizado ? "done" : "pending"}`}></span>
        </div>
      </div>

      {open && (
        <>
          <input value={name} onChange={e => setName(e.target.value)} onClick={e => e.stopPropagation()} />
          <input value={description} onChange={e => setDescription(e.target.value)} onClick={e => e.stopPropagation()} />
          <select value={priority} onChange={e => setPriority(e.target.value)} onClick={e => e.stopPropagation()}>
            <option value="4">Maximum</option>
            <option value="3">High</option>
            <option value="2">Medium</option>
            <option value="1">Low</option>
          </select>
          <button onClick={handleSave}>Save</button>
          <button className="btn-toggle" onClick={handleToggle}>
            {todo.realizado ? "Unmark" : "Mark as done"}
          </button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  )
}

export default TodoItem
