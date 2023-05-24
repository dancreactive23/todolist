import React from 'react';
import './TodoSearch.css';
import { TaskContext } from '../../TaskContext/TaskContext';
import { useContext } from 'react';

const TodoSearch = () =>{
    const {onSearchTask} = useContext(TaskContext);
    return(
        <div className='containerInput'>
            <input onChange={onSearchTask} className='containerInput__input' placeholder='Enter a task'/>
        </div>
    );
}

export default TodoSearch;