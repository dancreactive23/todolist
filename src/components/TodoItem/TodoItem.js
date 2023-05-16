import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({name,completed,onCompleteTask,onDeleteTask}) =>{

    return(
            <li className='liContainer'>
                <button  className={`liContainer-completed ${completed && "liContainer-completed--complete"}`} 
                onClick={onCompleteTask}/>
                <span className={`${completed && "taskCompleted"}`}>{name}</span>
                <FontAwesomeIcon className="liContainer-delete" icon={faXmark} onClick={onDeleteTask}/>
            </li>
    );
}

export default TodoItem;