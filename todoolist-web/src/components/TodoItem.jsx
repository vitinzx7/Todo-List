import './TodoItem.css'
import { updateTodo } from '../api/todoApi'


function TodoItem({ todo, onTodoUpdated }) {

  function handleToggle() {
    updateTodo({ ...todo, realizado: !todo.realizado })
      .then(todos => onTodoUpdated(todos))
  }

  return (
    <div className="todo-item">
      <p><strong>Nome:</strong> {todo.nome}</p>
      <p><strong>Descrição:</strong> {todo.descricao}</p>
      <p><strong>Prioridade:</strong> {todo.prioridade}</p>
      <p><strong>Status:</strong> {todo.realizado ? "Realizado" : "Pendente"}</p>
      <button onClick={handleToggle}>
        {todo.realizado ? "Desmarcar" : "Marcar como realizado"}
      </button>
    </div>
  )
}

export default TodoItem
