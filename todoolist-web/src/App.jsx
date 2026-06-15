import { useState } from 'react';

function App() {
   const [todos, setTodos] = useState([]);

  return (
    <div>
      
      <h1>Minha Todo List</h1>
      <p>Total de tarefas: {todos.length}</p>
    </div>
  )
}

export default App
