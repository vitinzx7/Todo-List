import { useState } from 'react'
import { createTodo } from '../api/todoApi'

function TodoForm({ onTodoCreated }) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(1)



export default TodoForm
