const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080"
const BASE_URL = `${API_URL}/todos`

export async function getTodos() {
  const res = await fetch(BASE_URL)
  return res.json()
}

export async function createTodo(todo) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  return res.json()
}

export async function updateTodo(todo) {
  const res = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  })
  return res.json()
}

export async function deleteTodo(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  })
  return res.json()
}