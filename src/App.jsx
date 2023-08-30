import "./styles.css";
import { useState } from "react";
import { newTodoForm } from "./NewTodo";
import { TodoList } from "./TodoList";

export default function App() {
  
  const [todos, setTodos] = useState([])
 
function addTodo(){
  setTodos( (currentTodos) => {
    return [
    [...todos, 
        {id:crypto.randomUUID(), title: newItem, completed:false},
    ]
]})
setNewItem("")
}



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
    <newTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos}/>
 
  </>
  )
}