import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './buttonContainer.css';


const CreateTodo = () =>{
    return(
        <div className='buttonContainer'>
            <button className='buttonContainer--item'>
                <FontAwesomeIcon icon={faPlus} style={{width:'25px', height:'25px', color:'#212f3d'}}/>
            </button>
        </div>
    );
}

export default CreateTodo;

