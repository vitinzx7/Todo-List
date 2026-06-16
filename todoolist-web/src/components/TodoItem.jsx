function TodoItem({ todo }) {
  return (
    <div>
      <p>{todo.nome}</p>
      <p>{todo.descricao}</p>
      <p>{todo.prioridade}</p>
      <p>{todo.realizado ? "Realizado" : "Pendente"}</p>

    </div>
  )
}

export default TodoItem
