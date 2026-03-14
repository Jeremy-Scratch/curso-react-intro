import React from "react"
import './TodoForm.css';
import { TodoContext } from "../../todoContext";

function TodoForm() {
    const [newTodo, setNewTodo] = React.useState('');
    const {setOpenModal,addTodo} = React.useContext(TodoContext);
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            setOpenModal(false)
            addTodo(newTodo);

        }}>
            <label>Add a new task</label>
            <textarea
            placeholder="Wash the car"
            value={newTodo}
            onChange={(e)=> setNewTodo(e.target.value)} />
            <div
            className="buttonContainer">
                <button 
                type="button"
                onClick={()=> setOpenModal(false)}
                className="form-button cancelButton ">
                    Cancel
                </button>
                <button 
                type="submit" 
                className="form-button addButton ">
                    Add
                </button>
                
            </div>
        </form>
    );
}

export { TodoForm };