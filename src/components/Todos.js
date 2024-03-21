
//https://www.youtube.com/watch?v=EbnmosN64JQ
//to follow along and also when you get stuck

//TODOS FOR THIS PROGRAM::
//FIX CSS SO THAT OUR X IS CENTERED (HAH!!)
//ADD EDIT FUNCTIONALITY
//SAVE OUR TODOS IN LOCAL STORAGE SO THAT WE CAN VIEW THEM ACROSS REFRESHES ETC
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
            status: false
        }
        // console.log(e.target.value);
        setTodos([...todos].concat(newTodo));
        setTodo("");
    }
    
    function handleDelete(id){
        const updatedTodos = [...todos].filter((todo)=>todo.id !== id);
        setTodos(updatedTodos);
    }

    function toggleComplete(id){
        //we need to actually MAP over each todo, that way we can edit the one we want
        //and return that todo from our MAP.
        //filter is no good here.
        const updatedTodos = [...todos].map((todo)=>{
            if (todo.id === id){
                todo.status = !todo.status
            }
            return todo;
        })
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
        <div className="todo" key={todo.id}> {todo.text} | {todo.status ? "COMPLETED!" : "IN PROGRESS!"} | <div>
            <button onClick={()=>handleDelete(todo.id)}>Delete TODO.</button>
            {/* <button onClick={()=>setEdit(true)}>Edit TODO.</button> */}
            <input type="checkbox" onChange={()=>toggleComplete(todo.id)}/>
            </div>
            {/* {edit ? <div>
            <form onSubmit={handleUpdate(todo.id)}>
                <input type="text" onChange={(e)=>setUpdate(e.target.value)} value={update}/>
                
            </form>
        </div>
             : <></>} */}
            </div>
        
    )

    })}
    
    </div>
        </div>
    )
}

export default Todos;