import { useState } from 'react'
import './TodoItem.css'
import { updateTodo, deleteTodo } from '../api/todoApi'


function TodoItem({ todo, onTodoUpdated, onTodoDeleted }) {
  const [aberto, setAberto] = useState(false)

  function handleToggle() {
    updateTodo({ ...todo, realizado: !todo.realizado })
      .then(todos => onTodoUpdated(todos))
  }

  function handleDelete() {
    deleteTodo(todo.id)
      .then(todos => onTodoDeleted(todos))
  }

  return (
    <div className="todo-item" onClick={() => setAberto(!aberto)}>
      <p><strong>Nome:</strong> {todo.nome}</p>
      <p><strong>Status:</strong> {todo.realizado ? "Realizado" : "Pendente"}</p>

      {aberto && (
        <>
          <p><strong>Descrição:</strong> {todo.descricao}</p>
          <p><strong>Prioridade:</strong> {todo.prioridade}</p>
          <button onClick={e => { e.stopPropagation(); handleToggle(); }}>
            {todo.realizado ? "Desmarcar" : "Marcar como realizado"}
          </button>
          <button onClick={e => { e.stopPropagation(); handleDelete(); }}>Excluir</button>
        </>
      )}
    </div>
  )
}

export default TodoItem
