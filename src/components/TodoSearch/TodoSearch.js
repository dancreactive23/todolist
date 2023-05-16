import React from 'react';
import './TodoSearch.css';

const TodoSearch = ({onSearchTask}) =>{
    return(
        <div className='containerInput'>
            <input onChange={onSearchTask} className='containerInput__input' placeholder='Enter a task'/>
        </div>
    );
}

export default TodoSearch;