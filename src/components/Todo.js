//singular todo, can edit it, mark complete or unmark or whatever we need
//You CLICK on a todo in the TODOS view, then come here
//sorts by TODO ID, then fill that specified todo here
//a TODO can be edited here, and you can change the status here too by clicking on the status
//SAVE or DISCARD your changes

//STRETCH goal:: create 'prerequisites' which only allow changing status to DONE when other sub-todos are marked DONE

import {useState} from 'react';

function Todo(props){
    const [editing, setEditing] = useState(true);
    const {id, title} = props;
    let description = 'some generic shit';
    return (
        <div id={id}>Singular Todo View YAA!
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Todo;