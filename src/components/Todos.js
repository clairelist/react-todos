import './todos.css';
import {useState, useEffect} from 'react';

function Todos(){
    //REMEMBER:: YOUR CLICK HANDLERS NEED TO BE CALLED AS AN ANON. FUNCTION OR IT WON'T WORK NO I PROMISE YOU IT WON'T.

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);
    const [update, setUpdate] = useState(todo.text || "");

    useEffect(()=>{ //on load of page
        const local = localStorage.getItem("list");
        const loaded = JSON.parse(local);
        if (loaded) {
            setTodos(loaded);
            } 
        console.log(loaded);
        }, [])

    //update local storage, remember we need to stringify our todos!!!
    //on todos array being updated
    useEffect(()=>{ 
        const local = JSON.stringify(todos);
        localStorage.setItem("list", local);
    }, [todos])

    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: new Date().getTime(),
            text: todo,
            status: false
        }
        setTodos([...todos].concat(newTodo));
        localStorage.setItem(todos, []);
        setTodo("");
    }
    
    function handleDelete(id){
        const updatedTodos = [...todos].filter((todo)=>todo.id !== id);
        setTodos(updatedTodos);
    }

    function toggleComplete(id){
        const updatedTodos = [...todos].map((todo)=>{
            if (todo.id === id){
                todo.status = !todo.status
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    function handleUpdate(id, update){ //I am a submit handler!
        const updatedTodos = [...todos].map((todo)=>{
            if (todo.id === id){
                todo.text = update
            }
            return todo;
        })
        setTodos(updatedTodos);
        }
    
    return (
        <div>
            
            <div className="todos-wrapper">
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
                    <button type="submit" >Add TODO</button>
                </form>
             { todos.map((todo)=>
                { 
                return ( 
        <div className="todo" key={todo.id}> {todo.text} | {todo.status ? "COMPLETED!" : "IN PROGRESS!"} | <div>
            <button onClick={()=>handleDelete(todo.id)}>Delete TODO.</button>
            <button onClick={()=>{setEditId(todo.id)}}>EDIT TODO.</button>
            <input type="checkbox" onChange={()=>toggleComplete(todo.id)}/>
            </div>
            {editId ? <div>
            <form >
                <input type="text" onChange={(e)=>setUpdate(e.target.value)} value={todo.id === editId ? update : todo.text}/>
                <button onClick={()=>handleUpdate(editId, update)}>UPDATE todo.</button>
                
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