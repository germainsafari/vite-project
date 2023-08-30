export function TodoList(completed, id , title) {
    return (
        <li key={todo.id}>
        <label htmlFor="">
          <input type="checkbox" 
          checked={completed} 
        //   onChange={e =>toggleTodo(id, e.target.checked) } 
        />
          {title}
        </label>
        <button 
        
        // onClick={() => deleteTodo(id)}  
        className="btn.btn-danger">remove</button>
      </li>
    )
}