import { useState } from 'react'
import { createTodo } from '../api/todoApi'

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
    <form onSubmit={handleSubmit}>
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
      <input
        type="number"
        value={prioridade}
        onChange={e => setPrioridade(e.target.value)}
        placeholder="Prioridade"
        min="1"
        max="5"
      />
      <button type="submit">Salvar</button>
    </form>
  )
}

export default TodoForm
