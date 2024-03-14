//collection of all todos view
//a TODO has:
//id, to determine which id is clicked and fetched by singular view
//title, a short clickable description of the todo, viewable here
//details, an extended description OR if null, the title of the todo again, viewable in singular todo view ONLY
// status text, clickable either IN PROGRESS, DONE, or ABANDONED
//checkbox, clickable that marks a checkmark when status is DONE or an X when ABANDONED 

//this view also has a 'create' button, that will render the CreateTodo view instead

//STRETCH goal:: create 'prerequisites' which only allow changing status to DONE when other sub-todos are marked DONE

import './todos.css';
//import Todo from './Todo';
import {useState} from 'react';

//REMEMBER TO KISS:: KEEP IT SIMPLE, STUPID.


function Todos(){
    //REMEMBER:: YOUR CLICK HANDLERS NEED TO BE CALLED AS AN ANON. FUNCTION OR IT WON'T WORK NO I PROMISE YOU IT WON'T.

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(false);
    const [update, setUpdate] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            status: "IN PROGRESS"
        }
        // console.log(e.target.value);
        setTodos([...todos].concat(newTodo));
        setTodo("");
    }
    
    function handleDelete(id){
        const updatedTodos = [...todos].filter((todo)=>todo.id !== id);
        setTodos(updatedTodos);
    }

    function handleUpdate(id){
        const updatedTodo = {
            id: id,
            text: todo
        }
        setTodos([...todos].concat(updatedTodo));
        setUpdate("") //filter? with the id passed in?
        }
    
    function handleEdit(e){
        return e.target.value;
    }

        
    
    
    return (
        <div>
            <h2>TODOS Master View</h2>
            <div className="todos-wrapper">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
                    <button type="submit" >Add TODO</button>
                </form>
             { todos.map((todo)=>
                { 
                return ( 
        <div className="todo" key={todo.id}> {todo.text} | {todo.status} | <div>
            <button onClick={()=>handleDelete(todo.id)}>Delete TODO.</button>
            <button onClick={()=>setEdit(true)}>Edit TODO.</button>
            </div>
            {edit ? <div>
            <form onSubmit={handleUpdate(todo.id)}>
                <input type="text" onChange={(e)=>setUpdate(e.target.value)} value={update}/>
                
            </form>
        </div>
             : <></>}
            </div>
        
    )

    })}
    
    </div>
        </div>
    )
}

export default Todos;