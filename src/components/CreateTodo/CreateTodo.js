import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { TaskContext } from '../../TaskContext/TaskContext';
import { useContext } from 'react';
import './buttonContainer.css';


const CreateTodo = () =>{
    const {onCreateTodo} = useContext(TaskContext);
    return(
        <div className='buttonContainer'>
            <button onClick={onCreateTodo} className='buttonContainer--item'>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    );
}

export default CreateTodo;

