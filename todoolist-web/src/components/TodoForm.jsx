import { useState } from 'react'
import { createTodo } from '../api/todoApi'
import './TodoForm.css'

function TodoForm({ onTodoCreated }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    createTodo({ nome: name, descricao: description, prioridade: priority, realizado: false })
      .then(todos => { onTodoCreated(todos); setName(''); setDescription(''); setPriority(1) })
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <h2 className="form-title">New Task</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="4">Maximum</option>
        <option value="3">High</option>
        <option value="2">Medium</option>
        <option value="1">Low</option>
      </select>
      <button type="submit">Save</button>
    </form>
  )
}

export default TodoForm
