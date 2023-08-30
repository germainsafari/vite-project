export function TodoList() {
    return(
        <ul className="list">
      {todo.length == 0 && "No Todos"}
      {todos.map(todo => {
        return (
        <li key={todo.id}>
        <label htmlFor="">
          <input type="checkbox" checked={todo.completed} 
          onChange={e =>toggleTodo(todo.id, e.target.checked) } />
          {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)}  className="btn.btn-danger">remove</button>
      </li>
      )
      })}
    </ul>
 
    )
}