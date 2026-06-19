import { useState } from 'react'
import './TodoItem.css'
import { updateTodo, deleteTodo } from '../api/todoApi'

const urgencyLabel = { 1: "Low", 2: "Medium", 3: "High" }

function TodoItem({ todo, onTodoUpdated, onTodoDeleted, isClearing }) {
  const [open, setOpen] = useState(false)
  const [completing, setCompleting] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [name, setName] = useState(todo.nome)
  const [description, setDescription] = useState(todo.descricao)
  const [priority, setPriority] = useState(todo.prioridade)

  function handleSave(e) {
    e.stopPropagation()
    updateTodo({ ...todo, nome: name, descricao: description, prioridade: priority })
      .then(todos => { onTodoUpdated(todos); setOpen(false) })
  }

  function handleToggle(e) {
    e.stopPropagation()
    setCompleting(true)
    setTimeout(() => {
      updateTodo({ ...todo, realizado: !todo.realizado })
        .then(todos => { onTodoUpdated(todos); setOpen(false); setCompleting(false) })
    }, 100)
  }

  function handleDelete(e) {
    e.stopPropagation()
    setDeleting(true)
    setTimeout(() => {
      deleteTodo(todo.id).then(todos => onTodoDeleted(todos))
    }, 400)
  }

  return (
    <div className={`todo-item${completing ? ' completing' : ''}${todo.realizado ? ' done' : ''}${isClearing || deleting ? ' clearing' : ''}`} onClick={() => setOpen(!open)}>
      <div className="todo-header">
        <p>
          <strong style={{ textDecoration: todo.realizado ? 'line-through' : 'none', opacity: todo.realizado ? 0.6 : 1 }}>
            {name}
          </strong>
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <small>{urgencyLabel[todo.prioridade]}</small>
          <span className={`status-dot ${todo.realizado ? "done" : "pending"}`} onClick={handleToggle}>
            {todo.realizado ? "✓" : "✕"}
          </span>
        </div>
      </div>

      {open && (
        <>
          <input value={name} onChange={e => setName(e.target.value)} onClick={e => e.stopPropagation()} placeholder="Name" />
          <input value={description} onChange={e => setDescription(e.target.value)} onClick={e => e.stopPropagation()} placeholder="Description" />
          <select value={priority} onChange={e => setPriority(e.target.value)} onClick={e => e.stopPropagation()}>
            <option value="3">High</option>
            <option value="2">Medium</option>
            <option value="1">Low</option>
          </select>
          <div className="todo-actions">
            <button onClick={handleSave}>Save</button>
            <div className="todo-actions-right">
              <button className="btn-toggle" onClick={handleToggle}>
                {todo.realizado ? "Unmark" : "Mark as done"}
              </button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TodoItem
