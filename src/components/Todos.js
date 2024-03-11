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

//dummy data
const dummyTodos = [
    {
     id: 1,
     title: "Loop over this array of objects",
     status: "IN PROGRESS",
     checked: "X"
    },
    {
        id: 2,
        title: "Do some styling to it",
        status: "IN PROGRESS",
        checked: "X"
       },
       {
        id: 1,
        title: "make status clickable and changes checkmark",
        status: "IN PROGRESS",
        checked: "X"
       }
]

function Todos(){
    
    return (
        <div>
            <h2>TODOS Master View</h2>
            <div className="todos-wrapper">
             { dummyTodos.map((todo)=>
                { 
                return ( 
        <div className="todo">{todo.title} {todo.status} {todo.checked}</div>
    )})}</div>
        </div>
    )
}

export default Todos;