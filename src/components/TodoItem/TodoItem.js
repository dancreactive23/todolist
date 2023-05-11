import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faXmark} from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({name,completed}) =>{
    return(
            <li className='liContainer'>
                <FontAwesomeIcon className={`liContainer-completed ${completed && "liContainer-completed--complete"}`} 
                icon={faCircleCheck}/>
                <span className={`${completed && "taskCompleted"}`} >{name}</span>
                <FontAwesomeIcon className='liContainer-delete' icon={faXmark}/>
            </li>
    );
}

export default TodoItem;