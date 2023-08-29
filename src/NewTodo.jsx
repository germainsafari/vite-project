import { useState } from "react"
function handleSubmit (e) {
    e.preventDefault()

    setTodos( (currentTodos) => {
        return [
          [...todos, 
            {id:crypto.randomUUID(), title: newItem, completed:false},
        ]
    ]})
    setNewItem("")
  }
  
export function newTodoForm() {
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
    <div className="row">
      <label htmlFor="item"> New item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
    </div>
  
    <button className="btn">Add</button>
    </form>
    )
    
}