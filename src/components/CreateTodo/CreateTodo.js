import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './buttonContainer.css';


const CreateTodo = ({onCreateTodo}) =>{
    return(
        <div className='buttonContainer'>
            <button onClick={onCreateTodo} className='buttonContainer--item'>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    );
}

export default CreateTodo;

