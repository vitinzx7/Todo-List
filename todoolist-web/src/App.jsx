import { useState } from 'react';
import TodoItem from './components/TodoItem'


function App() {
   const [todos, setTodos] = useState([
  { id: 1, nome: "Estudar React", descricao: "Aprender hooks", realizado: false, prioridade: 54 }
])


  return (
    <div>
      
      <h1>Minha Todo List</h1>
      {todos.map(todo => (
        <TodoItem todo = {todo} />
      ))}
    </div>
  )
}

export default App
