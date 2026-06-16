import { useState } from 'react'
import './TodoItem.css'
import { updateTodo, deleteTodo } from '../api/todoApi'


function TodoItem({ todo, onTodoUpdated, onTodoDeleted }) {
  const [aberto, setAberto] = useState(false)
  const [nome, setNome] = useState(todo.nome)
  const [descricao, setDescricao] = useState(todo.descricao)
  const [prioridade, setPrioridade] = useState(todo.prioridade)

  function handleSalvar(e) {
    e.stopPropagation()
    updateTodo({ ...todo, nome, descricao, prioridade })
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
    <div className="todo-item" onClick={() => setAberto(!aberto)}>
      <div className="todo-header">
        <p><strong>{nome}</strong></p>
        <span className={`status-dot ${todo.realizado ? "realizado" : "pendente"}`}></span>
      </div>

      {aberto && (
        <>
          <input value={nome} onChange={e => setNome(e.target.value)} onClick={e => e.stopPropagation()} />
          <input value={descricao} onChange={e => setDescricao(e.target.value)} onClick={e => e.stopPropagation()} />
          <input type="number" value={prioridade} onChange={e => setPrioridade(e.target.value)} onClick={e => e.stopPropagation()} min="1" max="5" />
          <button onClick={handleSalvar}>Salvar</button>
          <button onClick={handleToggle}>
            {todo.realizado ? "Desmarcar" : "Marcar como realizado"}
          </button>
          <button onClick={handleDelete}>Excluir</button>
        </>
      )}
    </div>
  )
}

export default TodoItem
