import { useState } from "react"

export function newTodoForm(props) {
    const [newItem, setNewItem] = useState("")



    function handleSubmit (e) {
        e.preventDefault()
        if (newItem == "")  return 

        onsubmit(newItem)

        setNewItem("")
    }
  


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