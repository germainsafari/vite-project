import "./styles.css";
import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
 
 
function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id == id ) {
        return {...todo, completed }
      }
      return todo
    })
  })

}
function deleteTodo ()  {
  setTodos(currentTodos => {
    return currentTodos.filter(todod => todo.id != id)
  })
}

  return (
    <>
  
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {todo.length == 0 && "No Todos"}
      {todos.map(todo => {
        return (
        <li key={todo.id}>
        <label htmlFor="">
          <input type="checkbox" checked={todo.completed} onChange={e =>toggleTodo(todo.id, e.target.checked) } />
          {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)}  className="btn.btn-danger">remove</button>
      </li>
      )
      })}
      
      
    </ul>
 
 
  </>
  )
}