import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faXmark} from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({name}) =>{
    return(
            <li className='liContainer'>
                <FontAwesomeIcon icon={faCircleCheck}  
                style={{width:'20px', height:'20px', color:'#ECF0F1'}} />
                <span>{name}</span>
                <FontAwesomeIcon icon={faXmark}  
                style={{width:'20px', height:'20px', color:'#ECF0F1'}} />
            </li>
    );
}

export default TodoItem;