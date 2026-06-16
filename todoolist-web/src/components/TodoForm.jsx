import { useState } from 'react'
import { createTodo } from '../api/todoApi'
import './TodoForm.css'

function TodoForm({ onTodoCreated }) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    createTodo({ nome, descricao, prioridade, realizado: false })
      .then(todos => onTodoCreated(todos))
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Nome"
        required
      />
      <input
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
        placeholder="Descrição"
      />
      <select value={prioridade} onChange={e => setPrioridade(e.target.value)}>
        <option value="4">Máximo</option>
        <option value="3">Alta</option>
        <option value="2">Média</option>
        <option value="1">Baixa</option>
      </select>
      <button type="submit">Salvar</button>
    </form>
  )
}

export default TodoForm
